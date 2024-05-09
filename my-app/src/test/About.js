import React from 'react'
import Header from './Header'


const About = ({ d }) => {

    const card = [{
        name: 'Anjali',
        age: '17',
        img: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg',
        stream: 'Science',
        village: 'Jaipur',
        mobile_no: '9024838563',
        introduction: 'I am a Software Trainee in TIPS-g, a part of We RNS it Solutions PVT. LTD.'

    },
    {
        name: 'Kajal',
        img: 'https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww',
        age: '18',
        stream: 'Commerce',
        village: 'Kota',
        mobile_no: '7240655025',
        introduction: 'I am a Software Engineer in TIPS-g, a part of We RNS it Solutions PVT. LTD.'
    }]
    return (
        <div>

            <Header />


            <h1 className='text-center fw-bold mt-5'>{d} About Page</h1>
            <div className='container mt-5'>
                <div className='row'>

                    {
                        card.map((one) => {
                            return (
                                
                                    <div className='col-sm-12 col-md-6 col-lg-6'>  <div className='card border-0 mt-5'>
                                        <div className='card-body text-center'>

                                            <h1>{one.name}</h1>
                                            <h3>{one.age}</h3>
                                            <img className='w-25 h-25' src={one.img} />
                                            <h5>{one.stream}</h5>
                                            <h6>{one.village}</h6>
                                            <p>{one.mobile_no}</p>
                                            <p>{one.introduction}</p>
                                        </div>
                                    </div></div>
                                                
                            )
                        })
                    }



                </div>
            </div>

        </div>
    )
}

export default About