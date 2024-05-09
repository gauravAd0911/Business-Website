import React from 'react';
import { Link } from 'react-router-dom';
// import blogd1 from './../assets/images/blogd1.jpg';



function Blogs() {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: '10 Eco-Friendly Furniture Trends to Watch in 2024',
  //     author: 'Gaurav Adulkar',
  //     date: 'May 15, 2024',
  //     image: <img src="./../assets/images/blogd1.jpg" alt="" />,
  //     excerpt:
  //       'Discover the latest trends in eco-friendly furniture design and sustainability practices shaping the industry in 2024.',
  //   },
  //   {
  //     id: 2,
  //     title: 'The Benefits of Choosing Cane Furniture for Your Home',
  //     author: 'Sanskar Lambor',
  //     date: 'April 28, 2024',
  //     image: 'https://via.placeholder.com/300',
  //     excerpt:
  //       'Explore the numerous advantages of incorporating cane furniture into your home decor and lifestyle.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Creating a Sustainable Outdoor Oasis with Cane Patio Furniture',
  //     author: 'Alice Johnson',
  //     date: 'March 10, 2024',
  //     image: 'https://via.placeholder.com/300',
  //     excerpt:
  //       'Learn how to design an environmentally friendly outdoor space using high-quality cane patio furniture.',
  //   },
  // ];

  // return (
  //   <div className="caveat-custom bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6">
  //     <div className="max-w-6xl mx-auto">
  //       <h2 className="text-5xl font-semibold text-center text-white mb-6 ">Blogs</h2>
  //       {/* Blog cards */}
  //       <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-6">
  //         {blogs.map((blog) => (
  //           <div key={blog.id} className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
  //             <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
  //             <div className="p-4">
  //               <h3 className="text-lg font-semibold text-white mb-2">{blog.title}</h3>
  //               <p className="text-sm text-gray-400 mb-4">
  //                 By {blog.author} | {blog.date}
  //               </p>
  //               <p className="text-sm text-gray-300">{blog.excerpt}</p>
  //             </div>
  //             <div className="p-4 mt-auto">
  //               <Link to={`/blog/${blog.id}`} className="text-white font-semibold hover:underline">
  //                 Read more
  //               </Link>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Blogs;
