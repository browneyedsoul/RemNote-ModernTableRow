# Modern Table Row

Make your Rem Table with simple tags!

## Getting Started

- Create a Rem hierarchy like in this image:

  ![image](https://user-images.githubusercontent.com/58147075/205598631-67e58b0a-19f5-4c74-8ed9-3b5a563362a4.png)

- Then type "##Table90" in the "Table" Rem and press enter to create your table:

  ![image](https://user-images.githubusercontent.com/58147075/205599037-a453ed5a-641f-42e9-af39-ea18d54edf4b.png)

## Available Tags


- You have to select one of the widths listed below first to make a `Modern Table Low`
- From 90px to 1200px, 30px interval
- When you focus on the table title Rem, you can see the **ruler**. Each point is spaced 30px apart, and the large vertical line represents a 150px interval.
- Of course, if it bothers you, you can simply lower the contrast or turn off the ruler on the Plugin Settings page by adjusting the opacity of the ruler line. (opacity value : 0 ~ 1)
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
 

# Tune your table with title bar tagging

## Global Column Width Control

- Select one of the widths to control the global column width
- Available widths → 90px to 1200px, 30px interval. 
- A 100px interval is also available, which would make it easier to remember.
- List

  | Global Column Width | Tag Name for tuning global width |
  | ------------- | ------------- |
  | 90px | `W90` |
  | 120px | `W120` |
  | 150px | `W150` |
  | 180px | `W180` |
  | 210px | `W210` |
  | ...   |   ...    |
  | 1170px | `W1170` |
  | 1200px | `W1200` |
  | - |  - |
  | 100px | `W100` |
  | 200px | `W200` |
  | 300px | `W300` |
  | 400px | `W400` |
  | 500px | `W500` |
  | 600px | `W600` |
  | 700px | `W700` |
  | 800px | `W800` |
  | 900px | `W900` |
  | 1000px | `W1000` |

  <img src="https://forum.remnote.io/uploads/default/original/2X/8/8ae892cd66862b9115bbbe74a0a3f1246b8a79e3.gif">
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/2.gif">

## Local Column Width Control
- Example Usage
  - `c1` means column 1 / `w400` means 400px --> `c1w400`
  - `c2` means column 2 / `w600` means 600px --> `c1w600` 
  - ...
- List

  | Available Column Width | These tags enable you to fine-tune the width of local columns with 100px intervals. |
  | ------------- | ------------- |
  | 100px | `c1w100` `c2w100`, `c3w100`, `c4w100`, `c5w100`, ... , `c9w100`  |
  | 200px | `c1w200` `c2w200`, `c3w200`, `c4w200`, `c5w200`, ... , `c9w200`  |
  | 300px | `c1w300` `c2w300`, `c3w300`, `c4w300`, `c5w300`, ... , `c9w300`  |
  | 400px | `c1w400`, `c2w400`, ... `c9w400`  |
  | 500px | `c1w500`, `c2w500`, ... `c9w500`  |
  | 600px | `c1w600`, `c2w600`, ... `c9w600` |
  | 700px | `c1w700`, `c2w700`, ... `c9w700`  |
  | 800px | `c1w800`, `c2w800`, ... `c9w800` |
  | 900px | `c1w900`, `c2w900`, ... `c9w900`  |
  | 1000px | `c1w1000` `c2w1000`,, ... `c9w1000` |

## Table width shrinking to fit inner contents
  
- Tag Name : `fit`
- Demo
  
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/fit.gif">

## Table Column Header Formatting

- Tag Name : `TH`
- Demo
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/thformatting.png">
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/thformatting.gif">


## Turning a Row table cell into a Column Table cell
  
- You can make a seperated table-row column by simple indenting under a top level rem in a table cell
- Demo
  
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/row-to-column.webp">

## Use case

<details>
  <summary>Copy a Table from any sources</summary>
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/0.gif">
</details>

<details>
  <summary>Paste it to RemNote and Tag the predefined-width Table Row Tags to the Table Title area</summary>
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/1.gif">
</details>