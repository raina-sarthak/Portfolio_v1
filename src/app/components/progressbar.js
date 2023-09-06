export default function Progress(){
    return(
        <div>
            <span id="ProgressLabel" class="sr-only">Loading</span>

            <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                class="block rounded-full bg-gray-200"
            >
                <span
                class="block h-3 rounded-full bg-indigo-600"
                style="width: 75%"
                ></span>
            </span>
        </div>
    )
}