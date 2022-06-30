import { getRequests, deleteRequest, getClowns, saveCompletions } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()
    //const clowns = getClowns()
    let html = `
        <ul>
            ${
        // add to map argument given request
        requests.map(convertRequestToListItems).join("")
        }
        </ul>
    `
    return html
}

const convertRequestToListItems = (request) => {
    //const request = getRequests()
    const clowns = getClowns()
    let html = ''
    html += `
    <li class="">${request.parentName} booked party for ${request.childName}.</li>
                <button class="request__delete"
                id="request--${request.id}">
                 Delete
                 </button>
                 
                 <select class="clowns" id="clowns">
                 <option value="">Choose</option>
                 ${clowns.map( clown => { return`<option value="${request.id}--${clown.id}">${clown.name}</option>`
                    }).join("")
                 }
                </select>`

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. clownId
                   3. date_created
            */

            const completion = {
                                requestId: parseInt(requestId), 
                                clownId: parseInt(clownId),
                                date_created: Date.now()
                                 }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                saveCompletions(completion)
        }
    }
)
