import React, { useState } from 'react'

export default function About(props) {
    const [btntext, setbtntext] = useState("Focus !")

    return (
        <div className="container">
            <h1 className={`text-${props.mode === 'light' ? 'dark':'light'} my-3`}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            About Me
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Hi! Myself, <strong>Chaudhry Muhammad Muttaqeen</strong>. I have a strong passion for responsive and interactive web development.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className
                            ="accordion-button collapsed" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            About Us
                        </button>
                    </h2>
                    <div id="collapseTwo" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} className
                        ="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className
                            ="accordion-body">
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est fuga sunt, voluptatum iure rem dolorem harum aliquam, dignissimos aliquid quaerat dicta ut architecto. Quo laborum iusto aspernatur eligendi reiciendis.</strong>
                        </div>
                    </div>
                </div>
                <div className
                    ="accordion-item">
                    <h2 className
                        ="accordion-header">
                        <button className
                            ="accordion-button collapsed" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About Them
                        </button>
                    </h2>
                    <div id="collapseThree" style={{backgroundColor: props.mode === 'light' ? 'white' : '#494242', color : props.mode === 'light' ? 'black' : 'white'}} className
                        ="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className
                            ="accordion-body">
                            <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quo obcaecati facere adipisci tempora, reiciendis quos vitae in dolor, quidem atque eligendi incidunt quae nulla, eius repudiandae consequatur. Nam, mollitia.</strong>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-dark mx-2 my-3">{btntext}</button>
        </div>


    )
}
