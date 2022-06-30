import { ServiceForm } from "./serviceForm.js"
import { Requests } from "./request.js"

export const partyRequestHTML = () => {
    return `
    <h1>Button and Lollipop's Clown Services</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>
    
    <section class="serviceRequests">
    <h2>Service Requests</h2>
    <div class="requests">${Requests()}
    </div>
    </section>
    <div class= "clown_image">
    </div>
    `
}