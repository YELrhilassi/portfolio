import { ContentBox, Page } from "components/layout/page";
import st from "./codesnippet.module.scss";

export default function Codesnippet() {
  return (
    <div>
      <div className={st.snippetSection}>
        <div className={st.textBox}>
          <div className={st.greeting}>Code Snippets</div>
          <div className={st.introText}>
            A collection of code snippets for different development needs. This
            collection helps me keep track of all sorts of solutions for coding
            problems, and it is meant to work by a simple copy and paste action.
          </div>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        necessitatibus quaerat esse ea deleniti eligendi quae sunt? Nulla optio
        magnam facere aut fugit quos magni ea, itaque adipisci, debitis placeat
        velit deleniti quibusdam repellat porro impedit exercitationem est sit
        reiciendis iste accusamus suscipit, voluptatum a. Optio dicta nemo
        quibusdam nihil in sed beatae totam minima possimus nobis veritatis,
        veniam voluptates eligendi incidunt doloribus. Quisquam, ut corporis?
        Architecto hic debitis, culpa autem ipsum cumque, nesciunt molestias
        omnis obcaecati minima animi ex ipsa error odio reiciendis adipisci
        similique, laboriosam quidem. Tempore, expedita.
      </div>
    </div>
  );
}
