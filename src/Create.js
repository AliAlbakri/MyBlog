import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Ali')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()


    const handelSubmit = (e) => {
        e.preventDefault()
        const blog = {title,body,author}
        setIsPending(true)

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log('added blog')
            setIsPending(false)
            history.push('/')
        })
    }


    return (  
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handelSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e)=> setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select 
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          >
            <option value="Ali">Ali</option>
            <option value="Ahmed">Ahmed</option>
          </select>
          {!isPending && <button>Add blog</button>}
          {isPending && <button disabled >Adding a blog ... </button>}



        </form>
      </div>
    );
}
 
export default Create;