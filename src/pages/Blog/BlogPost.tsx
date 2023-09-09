import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

const URL =
  "https://raw.githubusercontent.com/30-seconds/30-seconds-of-code/40987064b0adb546dba55fd7986373143869c433/snippets/articles/s/";

export default function Post() {
  const [post, setPost] = useState<any>(null);
  const { postId } = useParams();

  useEffect(() => {
    fetch(URL + postId + ".md")
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setPost(text);
      });
  }, []);

  return (
    <div>
      <ReactMarkdown children={post} />
    </div>
  );
}
