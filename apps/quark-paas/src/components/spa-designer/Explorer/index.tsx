import { ResizeBox } from "@arco-design/web-react";
import ComLibrary from "./ComLibrary";
import DocOutline from "./DocOutline";

interface Comlib {
  title: string;
  version: string;
  url: string;
  components: [];
}

interface ExplorerProps {
  comlibs?: Comlib[];
}

export default function ({ comlibs }: ExplorerProps) {
  return (
    <>
      <ResizeBox.Split
        direction="vertical"
        style={{ height: "100%" }}
        panes={[<DocOutline />, <ComLibrary comlibs={comlibs} />]}
      ></ResizeBox.Split>
    </>
  );
}
