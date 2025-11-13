//#3
import Client from "./Client.jsx";

function ClientsData () {

    //const client1 = {
    //    name: "Eva",
    //    phone: "0543946405",
    //    totalPurcheses: 15
    //}
    //const client2 = {
    //    name: "Anna",
    //    phone: "0543951591",
    //    totalPurcheses: 23
    //}
    // זה לא טוב כי כדי להוסיף קליינט אני גם צריכה להוסיף משתנה וגם להוסיף אותו ברינדור בריטרן!
    // פתרון:
    const allClients = [
        {
            name: "Eva",
            phone: "0543946405",
            totalPurcheses: 15
        },
        {
            name: "Anna",
            phone: "0543951591",
            totalPurcheses: 23
        },
        {
            name: "Eva",
            phone: "0543946405",
            totalPurcheses: 15
        }
    ]

    return (
        <> {/*
            <Client data={client1} />
            <Client data={client2} />
            : עכשיו במקום זה נעשה סוג של לולאה (בעזרת מפה) שמה שהיא תעשה זה עבור כל קליינט היא תצייר אותו שהדאטה שלו זה אותו איבר במערך
            */}

            {  allClients.map(item => { // אייטם זה האינדקס
                return (
                    < Client data={item}/> // הדאטה של הקליינט הנוכחי תהיה כמו של אותו קליינט שבמערך
                )
            })
            }
     </>
    )
}
export default ClientsData;