import React,{useState} from "react";
import {Form, FormGroup, Label,Input }from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useBlogsContext } from "../hooks/useBlogsContext";



const BlogForm = () => {
    const {dispatch} = useBlogsContext();
    const navigate = useNavigate();
    const [title, setTitle]= useState('');
    const [snippet, setSnippet]= useState('');
    const [featured, setFeatured]= useState(false);
    const [body, setBody]= useState('');
    const [image, setImage]= useState('');
    const [ author, setAuthor] = useState('');
    const [ error, setError] = useState(null);
    const [ emptyFields, setEmptyFields] = useState([]);



   
    const handleSubmit = async(e) => {
        e.preventDefault();

      



        const blog = {
            title,
            author,
            img: image,
            snippet,
            featured,
            body
           }

           const response = await fetch ('http://localhost:4000/api/blog', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
           });
          const json = await response.json();
          if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
          }  
          if(response.ok){
            if(response.featured){
                console.log('this is featured')
            }else{
                console.log('not featured')
            }
            setTitle('')
            setAuthor('')
            setImage('')
            setSnippet('')
            setFeatured(false)
            setBody('')
            setError(null)
            setEmptyFields([])
            console.log('new blog added', json)
            dispatch({type: 'CREATE_BLOG', payload: json})
            navigate('/', {replace: true})
          }

    }
    return (

        <div className="content container text-beige">
            {error && <div>{error}</div>}
            <Form className="flex-column" onSubmit={handleSubmit} encType="multipart/form-data">
                <FormGroup className="flex-column">
                    <Label for="Title">
                    Title:
                    </Label>
                    <Input
                    id="Title"
                    name="title"
                    placeholder="Enter Title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className = {emptyFields.includes('title')? 'error': ""}
                    />
                </FormGroup>
                <FormGroup className="flex-column">
                    <Label for="Author">
                    Author:
                    </Label>
                    <Input
                    id="Author"
                    name="author"
                    placeholder="Enter Author"
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    className = {emptyFields.includes('author')? 'error': ""}
                    />
                </FormGroup>
                <FormGroup  className="flex-column">
                    <Label for="Snippet">
                    Snippet:
                    </Label>
                    <Input
                    id="Snippet"
                    name="snippet"
                    placeholder="Enter Snippet"
                    type="text"
                    onChange={(e) => setSnippet(e.target.value)}
                    value={snippet}
                    className = {emptyFields.includes('snippet')? 'error': ""}
                    />
                </FormGroup>
                
                <FormGroup check>
                    <Input 
                    name="featured"
                    type="checkbox" 
                    checked={featured}
                    onChange={(e) => e.target.checked? setFeatured(true):setFeatured(false)}
                    />
                    {' '}
                    <Label check>
                    Featured?
                    </Label>
                </FormGroup>

                <FormGroup  className="flex-column">
                    <Label for="blog-body">
                   Body:
                    </Label>
                    <Input
                    id="blog-body"
                    name="text"
                    type="textarea"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    rows="10" 
                    className = {emptyFields.includes('body')? 'error': ""}
                    />
                </FormGroup>
               
                <button className="bg-dark text-beige" type="submit">Publish</button>
                {error && <div>{error}</div>}

            </Form>
          
        </div>
    )

}
export default BlogForm;