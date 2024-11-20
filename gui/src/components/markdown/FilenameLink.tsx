import { RangeInFile } from "core";
import { useContext } from "react";
import { getBasename } from "core/util";
import { IdeMessengerContext } from "../../context/IdeMessenger";
import FileIcon from "../FileIcon";

interface FilenameLinkProps {
  rif: RangeInFile;
}

function FilenameLink({ rif }: FilenameLinkProps) {
  const ideMessenger = useContext(IdeMessengerContext);

  function onClick() {
    ideMessenger.post("showLines", {
      filepath: rif.filepath,
      startLine: rif.range.start.line,
      endLine: rif.range.end.line,
    });
  }

  return (
    <span
      className="mb-[0.25em] mr-[0.1em] inline-flex cursor-pointer items-center gap-0.5 rounded-md pr-[0.3em] align-middle hover:ring-1"
      onClick={onClick}
    >
      <FileIcon filename={rif.filepath} height="20px" width="20px" />
      <span className="align-middle underline underline-offset-2">
        {getBasename(rif.filepath)}
      </span>
    </span>
  );
}

export default FilenameLink;
