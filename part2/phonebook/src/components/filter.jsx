


function Filter({searchText,person,setSearchText,filteredList,setFilteredList}) {
       
       const handleInput = (event) => {
	       setSearchText(event.target.value)
               setFilteredList( person.filter( (item) => item.name.includes(searchText)))
       }
       console.log("searchText",searchText)

	return (
	 <>
	  filter shown with:
          <input type='text' onChange={handleInput} value={searchText}/>
         </>
	)
}

export default Filter
