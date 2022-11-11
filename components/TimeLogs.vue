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
                    focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none" aria-label=".form-select-sm">
                    <option disabled selected>--Select an action--</option>
                    <option value="1">Login</option>
                    <option value="2">Morning Break</option>
                    <option value="3">Lunch Break</option>
                    <option value="4">Afternoon Break</option>
                    <option value="5">Logout</option>
                    </select>
                    <button class="hover:text-teal-500">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>
