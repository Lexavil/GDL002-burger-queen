import React from 'react'


const Funcional = (props) => {
  const id = props.match.params.id;
    console.log(props);
    return (
        <div className="container section funcional">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Project Title - {id}</span>
              <p>Que es esto</p>
              </div>
              <div className="card-action gret lighten-4 grey-text">
                <div>Alex Aviles</div>
                <div>2 mayo, 2am</div>
              </div>
           </div>
        </div>
    )
}

export default Funcional