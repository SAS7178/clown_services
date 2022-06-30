import { fetchRequests, fetchClowns } from "./dataAccess.js"
import { partyRequestHTML } from "./clownParty.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = partyRequestHTML()
            }
        )
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {
        render()
    }
)
