import React from 'react'

const NewsCard =(props)=>  {

 
    let{title,description,imageUrl,newsUrl,author,date,source} = props;

    return (
      <div>
         <div className="card" style={{width: "18rem"}}> 
         <span className="position-absolute top-0  translate-middle p-2 badge text-bg-success bg-primary border border-light" style={{zIndex:"1",left:"19%"}}>
            {source}
          </span>
            <img src={imageUrl} className="card-img-top" alt="not showing"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target = "_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Know more</a>
            </div>
        </div> 
        </div>
    )
  }
export default NewsCard;
