import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white':'#042743',
        backgroundColor: props.mode === 'dark' ? '#042743':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white':'#042743',
    }


    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            EditEase
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>EditEase</strong>, the innovative web app designed to revolutionize your text editing experience. With EditEase, you can effortlessly polish your documents, blog posts, or any written content with ease and precision. Our user-friendly interface and powerful editing tools ensure that you can quickly and efficiently enhance your writing, without the hassle of complicated software. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className
                            ="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            Free to use 
                        </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle} className
                        ="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className
                            ="accordion-body">
                        Whether you need to correct grammar and spelling errors, refine sentence structure, or improve overall readability, EditEase has got you covered. Say goodbye to clunky desktop applications and welcome the convenience of editing on-the-go, as <strong>EditEase</strong> seamlessly syncs across all your devices. Experience the freedom and flexibility of effortless text editing with EditEase today.
                        </div>
                    </div>
                </div>
                <div className
                    ="accordion-item">
                    <h2 className
                        ="accordion-header">
                        <button className
                            ="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" style={myStyle} className
                        ="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className
                            ="accordion-body">
                            <strong>EditEase</strong> is designed to be highly browser compatible, ensuring that you can access and utilize its features on any modern web browser of your choice. Whether you prefer Chrome, Firefox, Safari, or any other popular browser, EditEase works seamlessly across them all.
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
