import React from 'react'

let toggler = Math.round(Math.random()); //TO GENERATE RANDOME VALUE EITHER 0 OR 1

const InfoSpeech = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try Saying: <br />
            Add {toggler ? 'Income ' : 'Expense '}
            {toggler ? '₹5000 ' : '₹1000 '}
            in category {toggler ? 'Salary ' : 'Travel '}
            for {toggler ? 'Monday' : 'Tomorrow'}
        </div>
    )
}

export default InfoSpeech;