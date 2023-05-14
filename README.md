# Modern Table Row

Make your Rem Table with simple tags!

## Whoa!
> There is the "Database Table" recently launched in RemNote! Is it still useful?

> **Absolutely**, These are the reasons why you should consider before using the `Modern Table Row`
- I just want light weight, basic level table for logging simple, static information without sorting, filtering kind of things.
- I place a lot of value on the plain Outliner format and a keyboard-driven experience for fast table entry and configuration.
- I really care about the ability to export as a markdown text for the compatibility with other programs or documents.

## Getting Started

- Create a Rem hierarchy like in this image:

  ![image](https://user-images.githubusercontent.com/58147075/205598631-67e58b0a-19f5-4c74-8ed9-3b5a563362a4.png)

- Focus the cursor where the Table Title exist.
- Then open command list via onmibar(⌘+/) or slash(/)
- And then type `tb`. You'll see the options for modern table row 
- Without any cumbersome procedure, you can just make the table with keyboard shortcut. You can find the shortcut in the keyboard shortcut config page.
 

# Tune your table with tagging

> all the table controls are begin with title bar tagging

## Left Column Width Control

- After making the table, you can see the width of left column would be 150px.
- Of course you can resize the property column width.
- Simply tune the width with omnibar/slash command or keyboard shortcut. Shortcut would be easy way when you are using computer.
<img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/property.gif">

## Global Column Width Control

- Select one of the widths to control the global column width
- Available widths → 90px to 1200px, 30px interval. 
- A 100px interval is also available, which would make it easier to remember.
- List

  | Global Column Width | Tag Name for tuning global width |
  | ------------- | ------------- |
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

- To toggle the table header in the far left column, you can use the omnibar/slash command (tbh) or a keyboard shortcut(configurable).
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/th.gif">

## Turning a Row table cell into a Column Table cell
  
- You can make a seperated table-row column by simple indenting under a top level rem in a table cell
- Demo
  
  <img src="https://raw.githubusercontent.com/browneyedsoul/RemNote-ModernTableRow/main/public/row-to-column.webp">