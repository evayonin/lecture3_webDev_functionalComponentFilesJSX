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
    const allClients = [{
            name: "Eva",
            phone: "0543946405",
            totalPurcheses: 15
        }, {
            name: "Anna",
            phone: "0543951591",
            totalPurcheses: 23
        }, {
            name: "Eva",
            phone: "0543946405",
            totalPurcheses: 15
        }];

    return (
        <>
            {/*
            <Client data={client1} />
            <Client data={client2} />
            : עכשיו במקום זה נעשה סוג של לולאה (בעזרת מפה) שמה שהיא תעשה זה עבור כל קליינט היא תצייר אותו שהדאטה שלו זה אותו איבר במערך
            */}

            {
                allClients.length == 0 ? // ביטוי טרנרי
                    <div>
                        No Clients Found.
                    </div>
                    : // אם יש קליינטס אז ירנדר אותם:
                    <>
                        {
                            // asking to render all the objects that i have in my array
                            //syntax of array in js is a little different
                            allClients.map(item => (//for every object(item) render it
                                <Client data={item} />
                                // הדאטה של הקליינט הנוכחי תהיה כמו של אותו קליינט שבמערך
                                //if im removing one object, the component will update itself everytime...
                            ))

                            // בעיה - לא מראה לי את זה.
                        }
                    </>
            }
        </>
    )
}
export default ClientsData;