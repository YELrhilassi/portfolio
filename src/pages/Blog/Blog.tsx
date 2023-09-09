import Box from "components/layout/box";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL =
  "https://api.github.com/repos/30-seconds/30-seconds-of-code/git/trees/master?recursive=1";

const commitURL =
  "https://api.github.com/repos/30-seconds/30-seconds-of-code/commits";

export default function Blog() {
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((object) => {
        var files: any = [];
        object.tree.forEach((element: any) => {
          files.push(element.path);
        });

        // Generalise "snippets/articles/s/" to allow: "snippets/react/s/"
        const filtered = files.filter((file: any) =>
          file.startsWith("snippets/articles/s/")
        );

        files = [];
        filtered.forEach((element: any) => {
          files.push(
            element.replace("snippets/articles/s/", "").replace(".md", "")
          );
        });

        // Paginate?

        //console.log(files);
        setPosts(files);
      });
  }, []);

  return (
    <Box display="flex" gap="5rem" maxWidth="80%">
      {/* /blog/{post} */}
      {posts &&
        posts.map((post: any) => (
          <Box border="solid 1px black">
            <Link to={post}>{post}</Link>
          </Box>
        ))}
    </Box>
  );
}
