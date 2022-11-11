<template>
    <div class="w-1/2 h-1/2 border-2 border-teal-500 flex items-center justify-center">
        <form>
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96 flex flex-col justify-center gap-20">
                    <select class="form-select form-select-sm
                    block
                    w-full
                    px-2
                    py-1
                    text-sm
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none" aria-label=".form-select-sm"
                    id="selectId">
                    <option v-for="data in userActions" :value="data.value" :key="data.id">
                        {{data.label}}
                    </option>
                    </select>
                    <button class="leading-none border rounded text-white border-white hover:border-transparent bg-teal-500 text-sm p-2 "
                    @click.prevent="getValue()"
                    >Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userActions : [
                {
                    id: 0,
                    value: 'login',
                    label: 'Login',
                },
                {
                    id: 1,
                    value: 'morning-break',
                    label: 'Morning Break',
                },
                {
                    id: 2,
                    value: 'lunch-break',
                    label: 'Lunch Break',
                },
                {
                    id: 3,
                    value: 'afternoon-break',
                    label: 'Afternoon Break',
                },
                {
                    id: 4,
                    value: 'logout',
                    label: 'Logout',
                },
            ]
        }
    },

    methods: {
        getValue() {
           let data = document.getElementById('selectId');
           console.log(data.value);
        }
    }
}
</script>