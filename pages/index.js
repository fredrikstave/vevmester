import withErrorBoundary from '../src/hocs/with-error-boundary';
import styles from './styles/index.scss';

function throwError() {
  throw new Error('What the hell just happened!');
}

function Main() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.gridContainer}>
        <div className={styles.menuColumn}>
          <strong>Vevmester</strong>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
        <div className={styles.contentColumn}>
          <h2>What is Archie Markup Language?</h2>
          <p>ArchieML (or "AML") was created at The New York Times to make it easier to write and edit structured text on deadline that could be rendered in web pages, or more specifically, rendered in interactive graphics.</p>
          <p>One of the main goals was to make it easy to tag text as data, without having type a lot of special characters. Another goal was to allow the document to contain lots of notes and draft text that would not be read into the data. And finally, because we make extensive use of Google Documents's concurrent-editing features — while working on a graphic, we can have several reporters, editors and developers all pouring information into a single document — we wanted to have a format that could survive being edited by users who may never have seen ArchieML or any other markup language at all before.</p>
          <h2>Why not YAML? Or JSON?</h2>
          <p>ArchieML differs from other popular formats like <a href="#">YAML</a> and <a href="#">JSON</a> in several areas that we've found are key to making it easy to use:</p>
          <ul>
            <li><b>Whitespace is not significant to the document structure</b><br />In YAML, lines must be indented precisely and variably; the wrong number of spaces to the left of a key invalidates the document, and tabs can't be used. AML ignores all whitespace not within a value. We believe this makes it easier for non-programmers to use, and is essential for use in environments with non-monospaced fonts, like in Google Documents.</li>
            <li><b>Unstructured text is ignored; there is no such thing as a parsing error</b><br />AML was designed so that writers could work in a freeform environment. They should be able to add entire paragraphs as scratch work that do not appear in the output. JSON and YAML have strict schemas that forbid text deviating from a pattern. AML doesn't assume text follows any pattern. If it finds text that looks like data, it treats it as data. Otherwise, it moves on.</li>
            <li><b>The notation makes sense to non-programmers</b><br />Lists of values are noted with bullet points / asterisks, not hyphens or quoted strings that must be separated with commas. An overriding goal was to have a intuitive format that could be passed to a non-technical user — a reporter, an assigning editor or a copy editor — to edit, and to have the format be clear enough that they could make changes without breaking the parsing of the document. If we were using another format, we'd have to explain indentation rules in YAML, or how to match curly braces or properly escape quotation marks in JSON, and so forth.</li>
          </ul>
          <h2>How Does It Work in Practice?</h2>
          <p>For a very simple example, here's a screenshot of the Google Doc that powers a <a href="#">recent graphic about the trick plays</a> used by the New England Patriots and Seattle Seahawks:</p>
          <p>To generate the graphic, we load the ArchieML data from the document using the <a href="#">archieml-js npm module</a>, then pass it to an underscore template to render the final markup server-side. This lets the journalists who are focusing on the text and content concentrate on getting the copy in shape independently of the developers working on the graphic.</p>
          <p>While this is a very simple example, with only a few bits of text and data and one comment at the end that is ignored, when we're covering a breaking news story, we can have a half-dozen people all contributing to a Google Doc at the same time as we gather all the information we need for a graphic and turn it into the final copy blocks that make their way into the finished piece.</p>
        </div>
      </div>
    </div>
  );
}

export default withErrorBoundary(Main);
