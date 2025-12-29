let contact_data = [
    {
        contact_id: 1,
        contact_name: "Martina",
        contact_avatar: "https://img.freepik.com/foto-gratis/satisfecho-joven-morena-caucasica-mira-camara_141793-103873.jpg?semt=ais_hybrid&w=740&q=80",
        contact_unseen_messages: 5,
        last_message_content: "No es nada!",
        last_message_state: "RECEIVED",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Gracias!",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: "No es nada!",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: "Jorge",
        contact_avatar: "https://thumbs.dreamstime.com/b/retrato-al-aire-libre-de-una-persona-sonriente-vestida-casualmente-cerca-un-edificio-moderno-con-atuendo-casual-sonriendo-397911696.jpg",
        contact_unseen_messages: 0,
        last_message_content: "Todo bien?",
        last_message_state: "SEEN",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Qué tal?",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: "Todo bien?",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: "Roxana R.",
        contact_avatar: "https://plus.unsplash.com/premium_photo-1665663927587-a5b343dff128?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVqZXIlMjBydWJpYXxlbnwwfHwwfHx8MA%3D%3D",
        contact_unseen_messages: 10,
        last_message_content: "Sabes donde queda?",
        last_message_state: "RECEIVED",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Mira esta tienda",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: "Sabes donde queda?",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 4,
        contact_name: "Marcos",
        contact_avatar: "https://www.lanacion.com.ar/resizer/v2/marcos-SVOFYKXWXBE37A5USGQL62EFE4.jpg?auth=985f5cb4c52eac083e11074d5eeaf74f2f1bce7093ce3cdc8b81b159e04407dc&width=880&height=586&quality=70&smart=true",
        contact_unseen_messages: 0,
        last_message_content: "Gracias!",
        last_message_state: "SEEN",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Fuiste de gran ayuda",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: "Gracias!",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            }
        ]
    },
    {
        contact_id: 5,
        contact_name: "Carlitos",
        contact_avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tYnJlJTIwZXNwYSVDMyVCMW9sfGVufDB8fDB8fHww",
        contact_unseen_messages: 3,
        last_message_content: "Y vos?",
        last_message_state: "RECEIVED",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Todo bien",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: "Y vos?",
                message_state: "RECEIVED",
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 6,
        contact_name: "Ángela López",
        contact_avatar: "https://img.freepik.com/foto-gratis/retrato-mujer-sonriente-sofa_23-2148451746.jpg?semt=ais_hybrid&w=740&q=80",
        contact_unseen_messages: 5,
        last_message_content: "Esta increíble!",
        last_message_state: "RECEIVED",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Gran trabajo.",
                message_state: "RECEIVED",
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: "Esta increíble!",
                message_state: "RECEIVED",
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 7,
        contact_name: "Diego",
        contact_avatar: "https://media.istockphoto.com/id/1484631693/es/foto/retrato-de-un-joven-cauc%C3%A1sico-adolescente-de-18-o-19-a%C3%B1os-al-aire-libre.jpg?s=612x612&w=0&k=20&c=AH7f1geIm-toSuCSrU60UJdFh4L0VZf2zhUC5xPbb1o=",
        contact_unseen_messages: 0,
        last_message_content: "Me alegro",
        last_message_state: "SEEN",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Aprobé!",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: "Me alegro",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            }
        ]
    },
        {
        contact_id: 8,
        contact_name: "Maria Luisa",
        contact_avatar: "https://es.web.img3.acsta.net/pictures/17/01/10/13/53/476324.jpg",
        contact_unseen_messages: 0,
        last_message_content: "Me alegro",
        last_message_state: "SEEN",
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "Aprobé!",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: "Me alegro",
                message_state: "SEEN",
                message_created_at: new Date(),
                send_by_me: true
            }
        ]
    },
]

export default contact_data