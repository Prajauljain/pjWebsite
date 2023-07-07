import React from 'react'
import {cardData} from './Card'
import Card from './Card'

const SErvices = () => {
  return (
    <> 
      <div className="my-5">
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                cardData.map((cuval ,index) =>{
                  return <Card key={index}
                    imgsrc= {cuval.imgsrc}
                    title={cuval.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SErvices

