import { sendRequest } from "./dataAccess.js";


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childrenAmount">Children Attending</label>
            <input type="number" name="childrenAmount" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyAddress">Address of Party</label>
        <input type="text" name="partyAddress" class="input" />
    </div>
        <div class="field">
            <label class="label" for="partyDate">Date of Party</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyLength">Party Duration</label>
        <input type="number" name="partyLength" class="input" />
    </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const partyParentName = document.querySelector("input[name='parentName']").value
        const partyChildName = document.querySelector("input[name='childName']").value
        const partyChildren = document.querySelector("input[name='childrenAmount']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const partyDate = document.querySelector("input[name='partyDate']").value
        const partyLength = document.querySelector("input[name='partyLength']").value
       
        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: partyParentName,
            childName: partyChildName,
            children: partyChildren,
            address: partyAddress,
            date: partyDate,
            duration: partyLength
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})