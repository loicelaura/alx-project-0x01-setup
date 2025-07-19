import { PostModalProps, PostData } from "@interfaces";
import React, {useState} from 'react';

const PostModal: React.FC<PostModalProps> = ({onClose, onSubmit}) => {
    const [post, setPost] = useState<PostData>({
        userId: 1,
        title: "",
        body: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        const { name,value } = e.target; setPost((prevPost) => ({...prevPost, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
    };

    return (
        <div className="fixed insert-0 bg-gray-900 bg-opacity-50 flex justify-centre items-centre">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className=" text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">User ID</label>
                        <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={post.title} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post title" />
                        </div>
                        <div className ="flex justify-between items-center"> 
                            <button 
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                Cancel
                            </button>
                            <button type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover: bg-blue-600 transition">Add Post
                            </button>
                            </div>
                            </form>
                            </div>
                            </div>
    );
};

export default PostModal;