# Modern Table Row

Make your rem table with simple tags!

## Usage

- You have to select one of the widths listed below first to make a `Modern Table Low`
  - From 90px to 1200px, 30px interval

  - Available Left Column Width List

  | Table Left Column Width | Available Tag Name (Case does not matter) |
  | ------------- | ------------- |
  | 90px | `Table90` |
  | 120px | `Table120` |
  | 150px | `Table150` |
  | 180px | `Table180` |
  | 210px | `Table210` |
  | ...   |   ...    |
  | 1170px | `Table1170` |
  | 1200px | `Table1200` |
 

## Tune your table with title bar tagging

  <details>
    <summary>Tuning Global Column Width</summary>

  | Table Left Column Width | Tag Name for global width tuning |
  | ------------- | ------------- |
  | 90px | `W90` |
  | 120px | `W120` |
  | 150px | `W150` |
  | 180px | `W180` |
  | 210px | `W210` |
  | ...   |   ...    |
  | 1170px | `W1170` |
  | 1200px | `W1200` |

  <img src="https://forum.remnote.io/uploads/default/original/2X/8/8ae892cd66862b9115bbbe74a0a3f1246b8a79e3.gif">
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/2.gif">
  </details>

  <details>
    <summary>Tuning Individual Column Width</summary>

  - 'c1' means column 1
  - 'c2' means column 2
  - ...

  | Available Column Width | Tag Name for width tuning - INDIVIDUAL column |
  | ------------- | ------------- |
  | 200px | `c1w200`, `c2w200`, `c3w200`, `c4w200`, `c5w200`, ... , `c9w200`  |
  | 400px | `c1w400`, `c2w400`, ... `c9w400`  |
  | 600px | `c1w600`, `c2w600`, ... `c9w600` |
  | 800px | `c1w800`, `c2w800`, ... `c9w800` |
  | 1000px | `c1w1000` `c2w1000`,, ... `c9w1000` |

  </details>

  <details>
    <summary>Table width shrinking to fit inner contents</summary>
 
  - Tag Name : `fit`

  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/fit.gif">
  </details>

 

  <details>
    <summary>Table Column Header Formatting</summary>

  - Tag Name : `th`

  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/thformatting.png">
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/thformatting.gif">
  </details>

## Use case

  <details>
    <summary>Copy a Table from any sources</summary>
    <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/0.gif">
  </details>

  <details>
    <summary>Paste it to RemNote and Tag the predefined-width Table Row Tags to the Table Title area</summary>
    <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/1.gif">
  </details>

## Hacky methods

  <details>
    <summary>Turn a Row table cell into a Column Table cell</summary>

  - Tag Nmae : ~~`lb`~~(deprecated)
  
  > You can now make seperated table-row column by simple indenting under a top level rem in a table cell
    
  </details>
