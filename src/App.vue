<script setup>
import { ref } from "vue";
import { useDate } from "./date.js";

const inputValue = ref("");
const chosenField = ref("day");

const { date, getDay, getMonth, addDay, addMonth } = useDate();

function findDate() {
    if (!Number(inputValue.value)) return;
    chosenField.value === "day"
        ? addDay(inputValue.value)
        : addMonth(inputValue.value);
    inputValue.value = "";
}
</script>

<template>
    <span class="date"
        >Date (mm-dd-yyy) : {{ date.toLocaleDateString() }}
    </span>
    <div>
        <br />
        <div class="switch">
            <div class="form-control">
                <input
                    id="day"
                    type="radio"
                    name="days/month"
                    value="day"
                    :checked="chosenField === 'day'"
                    v-model="chosenField"
                />
                <label for="day"> Add Day</label>
            </div>
            <div class="form-control">
                <input
                    id="month"
                    type="radio"
                    name="days/month"
                    value="month"
                    :checked="chosenField === 'month'"
                    v-model="chosenField"
                />
                <label for="month">Add Month</label>
            </div>
        </div>
        <div class="displays">
            <p>Day: {{ getDay() }}</p>
            <p>Month: {{ getMonth() + 1 }}</p>
        </div>
        <input
            type="number"
            v-model="inputValue"
            :placeholder="chosenField === 'day' ? 'Add day' : 'Add month'"
            class="num-input"
        />
        <button @click="findDate">Get Date</button>
    </div>
</template>

<style scoped></style>
