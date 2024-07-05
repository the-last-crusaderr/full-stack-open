
/*
  App
   Course
    Header
    Content
     Part
     Part ...
*/

const Total = ({subj}) => {
        let sum = 0
	
	const total  = subj.reduce( (sum,sub) =>{
		       return sum += sub.exercises},0)
//	console.log(current,sum)
	return (
          <div>
	    Total {total} 
          </div>
	)
	}


const Part = ({subj}) => {
      return (
	<div>
	  
	    {subj.name} {subj.exercises}
	 
        </div>
      )
	}


const Content = ({course}) => {
      return (
	<>	
	 
          {course.parts.map( (subj) => <Part key={subj.id} subj ={subj}/>)}
          <Total subj={course.parts}/> 
	</>
      )
	}


const Course = ({course}) => {
      return(
	<>
         <h1>{course.name}</h1>
         <Content course={course}/>
        </>
      ) 
	}


export default Course



