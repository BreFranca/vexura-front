<script setup>
const salary = (ref < 10) | (null > null);
const result = ref(null);

async function calculate() {
  const { data } = await useFetch("/api/calc", {
    method: "POST",
    body: { salary },
  });

  result.value = data.value;
}
</script>

<template>
  <div class="max-w-lg mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Salary Calculator</h1>

    <input
      v-model="salary"
      type="number"
      placeholder="Enter gross salary"
      class="border rounded p-2 w-full mb-4"
    />

    <button
      @click="calculate"
      class="bg-blue-600 text-white px-4 py-2 rounded w-full"
    >
      Calculate
    </button>

    <div v-if="result" class="mt-6 p-4 border rounded bg-gray-50">
      <p><strong>Gross:</strong> {{ result.salary }}</p>
      <p><strong>INSS:</strong> {{ result.inss }}</p>
      <p><strong>IRRF:</strong> {{ result.irrf }}</p>
      <p><strong>Net:</strong> {{ result.net }}</p>
    </div>
  </div>
</template>
