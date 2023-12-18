import React from "react";

const CommentsData = [
  {
    name: "mj",
    text: "hello kaise ho",
    replies: [
      {
        name: "mj",
        text: "hello kaise ho",
        replies: [
          {
            name: "mj",
            text: "hello kaise ho",
            replies: [
              {
                name: "mj",
                text: "hello kaise ho",
                replies: [],
              },
              {
                name: "mj",
                text: "hello kaise ho",
                replies: [],
              },
            ],
          },
          {
            name: "mj",
            text: "hello kaise ho",
            replies: [],
          },
        ],
      },
      {
        name: "mj",
        text: "hello kaise ho",
        replies: [],
      },
    ],
  },
  {
    name: "mj",
    text: "hello kaise ho",
    replies: [],
  },
  {
    name: "mj",
    text: "hello kaise ho",
    replies: [],
  },
  {
    name: "mj",
    text: "hello kaise ho",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md bg-white rounded-lg my-3 p-3">
    <img className="w-12 h-12 rounded-full" alt="user" src="/user.png" />
    <div className="ml-3">
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
  
  );
};

const CommentsList = ({comments}) => {
  return (
    <div>
      {comments.map((comment,index) => (
        <div key={index}>
        <Comment  data={comment} />
        <div className="pl-5  ml-5">
      <CommentsList comments={comment.replies}/>
        </div>
        </div>
     
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
