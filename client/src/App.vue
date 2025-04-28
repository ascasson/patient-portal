<template>
  <main>
    <header class="top-bar">
      <h1>Patient Reports</h1>
      <div class="controls">
        <input
          id="filter"
          type="text"
          v-model="filterName"
          placeholder="e.g. Smith"
        />
        <button @click="fetchReports" :disabled="loading">
          {{ loading ? 'Fetching…' : 'Fetch Reports' }}
        </button>
      </div>
    </header>

    <div class="content">
      <div v-if="error" class="error">
        💥 Error: {{ error.message }}
      </div>
      <ul>
        <li v-if="!reports.length && !loading">
          No data — click “Fetch Reports” above.
        </li>
        <li
          v-for="r in filteredReports"
          :key="r.id"
          :class="{ alert: isAlert(r.summary) }"
        >
          <strong>{{ r.patientName }}</strong>
          <p>{{ r.summary || '(none)' }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const reports = ref([])
const loading = ref(false)
const error = ref(null)
const filterName = ref('')

const isAlert = summary =>
  /tachycardia|arrhythmia/i.test(summary || '')

const filteredReports = computed(() => {
  if (!filterName.value) return reports.value
  return reports.value.filter(r =>
    (r.patientName || '')
      .toLowerCase()
      .includes(filterName.value.toLowerCase())
  )
})

async function fetchReports() {
  loading.value = true
  error.value = null
  try {
    const params = {}
    if (filterName.value) params.patientName = filterName.value
    const { data } = await axios.get('http://localhost:3000/reports', { params })
    reports.value = data
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>