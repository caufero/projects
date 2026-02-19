# Custom Functions (CauferoAppStarter)

## Custom Functions Preamble

These custom functions are a shared utility layer for CauferoAppStarter. They exist to keep scripts short, consistent, and predictable by centralizing repeated logic (list handling, text cleanup, date/time formatting, ID generation, SQL helpers, HTML and JS helpers, validation, and encoding).

This document is also training material for an AI agent that builds FileMaker applications in the same style. The agent should:
- Use existing custom functions whenever they solve the problem cleanly.
- Suggest new custom functions when a pattern repeats, when a script becomes noisy, or when a rule needs to be enforced consistently across the file.
- Create new functions using the same conventions and standards in this library.

### Core Rules For Using Custom Functions
- Prefer calling a custom function over rewriting the same logic in multiple scripts.
- Treat each custom function as a stable API. Avoid changes that break existing scripts.
- If behavior must evolve, prefer creating a new function (or a clearly named v2 variant) instead of changing outputs silently.
- Keep functions deterministic and side-effect free. A custom function should return a value only, with no dependency on UI state.
- Handle empty inputs gracefully. When possible, return an empty result or a sensible default instead of raising errors.
- Keep outputs predictable, with a clearly stated return type (Text, Number, Date, Timestamp, JSON as Text).

### Conventions For Creating New Custom Functions
**Naming**
- Use PascalCase for function names.
- Use clear action names for transformers (Add, Remove, Convert, Escape, Format, Generate, Validate, Get).
- Use noun-based names only for pure getters or helpers that return a single concept (Example: `GetDevice`).

**Parameter Naming**
- Use descriptive names aligned with the existing library.
- Use a trailing underscore for generic or commonly reused parameters: `value_`, `string_`, `Text_`.
- Use a leading underscore when you want to visually separate a “raw input value” from processed values: `_Date`, `_Time`.
- Keep parameter order consistent with the existing patterns:
  - Primary input first (the thing being modified or evaluated)
  - Options next (format, precision, separators, limits)
  - Secondary inputs last (reference values, previous codes)

**Delimiters and Data Shapes**
- Default list shape is return-delimited text (`¶`) unless the function explicitly states otherwise.
- If a function encodes or decodes a delimiter (Example: `*****` or `|`), document it clearly and keep it consistent.
- For JSON-producing helpers, keep output keys stable and documented (Example: `data`, `records`, `error`, `message`).

**Dependencies**
- If a new function relies on other custom functions, list them under Notes as dependencies.
- Prefer using existing helpers (Example: `ValueExists`, `RemoveValues`, `EscapeDoubleQuotes`) instead of re-implementing similar logic.

### Documentation Standard For Each Function
Every custom function entry should include:
- **Purpose**: one clear sentence describing what it does.
- **Parameters**: each parameter described with expected type and delimiter shape if relevant.
- **Returns**: type plus a short description of the output.
- **Example**: input and output with realistic values.
- **Notes**: edge cases, assumptions, dependencies, and any delimiter constraints.

### When The AI Agent Should Suggest A New Function
Suggest a new custom function when:
- The same calculation or transformation appears in 2 or more scripts.
- A script needs repeated “cleanup” steps (text normalization, escaping, trimming, list manipulation).
- A consistent formatting rule is needed across layouts, reports, or WebViewer output.
- A script needs a reusable mapping table (statuses, labels, units, platform detection).
- A script builds JSON or parses SQL results in a repeated pattern.

When suggesting a new function, the agent should provide:
- Proposed **Name** and **Signature**
- Target **Category** (List, Text, DateTime, Formatting, SQL, HTML/JS, Validation, Utility)
- **Purpose**, **Returns**, **Example**
- Compatibility notes, especially if replacing an older pattern

<br/><br/>

---

## Current Custom Functions in CauferoAppStarter

- `AddValue`(ValueList; Value_)
- `RemoveValue`(ValueList; Value_)
- `RemoveValues`(ValueList; ValuesToRemove)
- `AddOrRemoveValue`(value_; content)
- `ValueExists`(ValueList; Value_)
- `RemoveEmptyValues`(Text)
- `MaxListValue`(~list)

---

- `EncodeListAsScriptParameters`(list_)
- `DecodeListAsScriptParameters`(list_)
- `GetScriptParameters`()
- `ConvertPipeDelimitedToReturnDelimited`(String)

---

- `DefaultIfEmpty`(string; replaceWith)
- `PadLeft`(value_; character; stringlength)
- `RemoveTrailingComma`(Text)
- `RemoveSpecialCharacters`(String)

---

- `EscapeDoubleQuotes`(String)
- `EscapeSingleQuoteInHTML`(String)
- `DecodeURIComponent`(EncodedText)

---

- `ConvertReturnsToBR`(string_)
- `ConvertLineBreakMarkersToReturns`(String)
- `JSNormalizeTextChain`()
- `HTMLToTextStripTags`(text)

---

- `FormatNumber`(Number; DecimalPrecision; ThousandSeparator)
- `AbbreviateNumber`(number; precision)
- `Ordinal`(number)

---

- `ShortenString`(string; totalCharacters)
- `Ellipsis`(Text_; MaxTextLength_)
- `Singular`(string_)
- `PluralizeText`(text; quantity)
- `PluralizeTerm`(term; quantity)
- `AOrAn`(text_)

---

- `FullNameTitleFirstMiddleLast`(title; first_name; middle_name; last_name)
- `FullNameTitleLastFirstMiddle`(title; first_name; middle_name; last_name)
- `FullNameLastFirstMiddleTitle`(title; first_name; middle_name; last_name)
- `FullNameFirstMiddleLast`(first_name; middle_name; last_name)
- `FullNameFirstLast`(first_name; last_name)
- `AbbreviateText`(text)
- `AbbreviateTextCustom`(text; spaces; hyphens; periods)

---

- `DateInWordsShortMonth`(_Date)
- `DateInWordsShortMonthNoYear`(_Date)
- `DateInWordsShortMonthNDay`(_Date)
- `DateInWordsShortMonthNDayNoYear`(_Date)
- `DateInWordsMonthNYear`(_Date)
- `DateInWordsLongMonth`(_Date)
- `RelativeDateInWords`(_Date)

---

- `MySQLDateToFMPDateText`(MySQL_Date)
- `MySQLTimestampToFMPTimestampText`(MySQL_Timestamp)
- `FMPDateTextToMySQLDate`(FMP_Date)
- `DateInShortWordsToFMPDate`(inputDate)

---

- `MinutesToTextTime`(Minutes)
- `Elapsed`(StartDate; EndDate)
- `ElapsedTime`(TStampBegin; TStampEnd; Format)
- `TimeNoSeconds`(_Time)
- `FormatTimeHHMM12`(theTime)
- `RelativeElapsedPeriodLong`(Timestamp1; Timestamp2)
- `RelativeElapsedPeriodShort`(Timestamp1; Timestamp2)
- `RelativePeriodShort`(Timestamp1; Timestamp2)
- `Age`(DOB)
- `WeekdayCount`(StartDate; EndDate)
- `MondayOfGivenWeek`(week_; year_)

---

- `AddDaysToDate`(Date_; DaysToAdd_)
- `AddWeeksToDate`(Date_; WeeksToAdd_)
- `AddMonthsToDate`(Date_; MonthsToAdd_)
- `AddYearsToDate`(Date_; YearsToAdd_)
- `AddPeriodToDate`(Date_; NumberToAdd_; PeriodTypeToAdd_)

---

- `RandomInteger`(start; stop)
- `GeneratePassword`(Len; Letters; Numbers; Symbols)
- `GenerateNextRecordCode`(Alphabets; NumericLength; LastSerial)
- `GenerateNextCode`(prefix; serialLength; previousCode)

---

- `GetDevice`()
- `GetExtension`(Some Filename)
- `GetFileSize`(Bytes; Precision; UOM; Format)
- `GenerateFileIconHTML`(Extension)
- `RecordStatus`(status)

---

- `Pronoun`(Gender; Type)

---

- `ExecuteSQLResultToJSON`(sqlResult; fieldSub; rowSub; fieldList; limit)
- `SQLFieldNames`(_sqlText)
- `IsValidEmailFormat`(_email)

---

- `Base64EncodeFile`(file)

<br/><br/>

---
## Details of Each Custom Function in CauferoAppStarter


## AddValue ( ValueList ; Value_ )

### Purpose
Appends a value to the end of a return-delimited list.

### Parameters
- **ValueList**  
  A return-delimited list of values.
- **Value_**  
  The value to append.

### Returns
- Text: the updated list (return-delimited).

### Example
**Input**  
ValueList = Red¶Blue  
Value_ = Green  

**Output**  
Red¶Blue¶Green

### Notes
- If `ValueList` is empty, the result is just `Value_` (no leading return).

---

## RemoveValue ( ValueList ; Value_ )

### Purpose
Removes all exact matches of a value from a return-delimited list.

### Parameters
- **ValueList**  
  A return-delimited list of values.
- **Value_**  
  The exact value to remove (exact match).

### Returns
- Text: the updated list (return-delimited), with the matching value removed.

### Example
**Input**  
ValueList = Red¶Blue¶Green¶Blue  
Value_ = Blue  

**Output**  
Red¶Green

### Notes
- Matching is exact (case and spacing sensitive).
- Implemented using recursion (processes the list from first value to last).

---

## RemoveValues ( ValueList ; ValuesToRemove )

### Purpose
Removes multiple values from a return-delimited list.

### Parameters
- **ValueList**  
  A return-delimited list of values.
- **ValuesToRemove**  
  A return-delimited list of values to remove.

### Returns
- Text: the updated list (return-delimited), with the specified values removed.

### Example
**Input**  
ValueList = Red¶Blue¶Green¶Blue Sky¶Blue  
ValuesToRemove = Blue¶Green  

**Output**  
Red¶Blue Sky

### Notes
- Removes whole list items only (does not remove partial text inside an item).
- Blank rows in `ValuesToRemove` are ignored.
- Implemented using recursion (processes ValuesToRemove one value at a time).

---

## AddOrRemoveValue ( value_ ; content )

### Purpose
Toggles a value in a return-delimited list.
- If the value exists, it is removed.
- If the value does not exist, it is added to the end.

### Parameters
- **value_**  
  The value to toggle.
- **content**  
  A return-delimited list of values.

### Returns
- Text: the updated list (return-delimited).

### Example
**Input**  
content = Red¶Blue¶Green  
value_ = Blue  

**Output**  
Red¶Green

### Notes
- Depends on these helper functions:
  - `ValueExists ( content ; value_ )`
  - `RemoveValues ( content ; value_ )`
  - `AddValue ( content ; value_ )`

---

## ValueExists ( ValueList ; Value_ )

### Purpose
Checks whether a value exists in a return-delimited list (exact match).

### Parameters
- **ValueList**  
  A return-delimited list of values.
- **Value_**  
  The value to check for (exact match).

### Returns
- Number: `1` if the value exists.
- Empty if the value does not exist (acts like false).

### Example
**Input**  
ValueList = Red¶Blue¶Green  
Value_ = Blue  

**Output**  
1

### Notes
- Matching is exact (case and spacing sensitive).
- Implemented using recursion (scans the list from first value to last).

---

## RemoveEmptyValues ( Text )

### Purpose
Removes empty lines from return-delimited text.
Also trims leading and trailing returns.

### Parameters
- **Text**  
  Return-delimited text that may contain blank rows.

### Returns
- Text: a cleaned return-delimited list with no empty rows.

### Example
**Input (Text)**  
A¶¶¶B¶C¶

**Output**  
A¶B¶C

### Notes
- Collapses repeated returns (¶¶) into a single return.
- Trims leading and trailing returns.
- Uses recursion until the text is fully cleaned.

---

## MaxListValue ( ~list )

### Purpose
Returns the maximum value from a return-delimited list.

### Parameters
- **~list**  
  A return-delimited list of values (typically numbers).

### Returns
- Number (or Text): the largest value in the list.

### Example
**Input (~list)**  
1¶2¶3

**Output**  
3

### Notes
- Uses a `While` loop to scan the entire list.
- Best used with clean numeric values for predictable results.

---

## EncodeListAsScriptParameters ( list_ )

### Purpose
Encodes a return-delimited list into a single string by replacing each return (¶) with a marker (`*****`).  
Useful for passing lists as script parameters.

### Parameters
- **list_**  
  A return-delimited list.

### Returns
- Text: the encoded string with `*****` used as the delimiter.

### Example
**Input (list_)**  
Red¶Blue¶Green

**Output**  
Red*****Blue*****Green

### Notes
- Intended to be paired with `DecodeListAsScriptParameters ( list_ )`.
- Assumes your list values do not contain the literal text `*****` (or it will be ambiguous).

---

## DecodeListAsScriptParameters ( list_ )

### Purpose
Decodes a string back into a return-delimited list by replacing the marker (`*****`) with returns (¶).  
Typically used to restore lists passed through script parameters.

### Parameters
- **list_**  
  A string that uses `*****` as the delimiter.

### Returns
- Text: a return-delimited list.

### Example
**Input (list_)**  
Red*****Blue*****Green

**Output**  
Red¶Blue¶Green

### Notes
- Intended to be paired with `EncodeListAsScriptParameters ( list_ )`.
- If a value legitimately contains `*****`, decoding will split it incorrectly.

---

## GetScriptParameters ( )

### Purpose
Converts the current script parameter from pipe-delimited (`|`) into a return-delimited list (`¶`).

### Parameters
- None (uses `Get ( ScriptParameter )` internally)

### Returns
- Text: a return-delimited list of parameter values.

### Example
**Input (ScriptParameter)**  
123|Edit|1

**Output**  
123¶Edit¶1

### Notes
- Useful together with `GetValue ( GetScriptParameters ( ) ; n )` to fetch the nth parameter.
- Assumes `|` is the delimiter used when passing script parameters.

---

## ConvertPipeDelimitedToReturnDelimited ( String )

### Purpose
Converts a pipe-delimited string (`|`) into a return-delimited list (`¶`).

### Parameters
- **String**  
  The input text containing `|` separators.

### Returns
- Text: the same values separated by returns (`¶`).

### Example
**Input (String)**  
ID123|Pending|High

**Output**  
ID123¶Pending¶High

### Notes
- Useful when you want to pass multiple values in one string and then use `GetValue ( list ; n )`.

---

## DefaultIfEmpty ( string ; replaceWith )

### Purpose
Returns a fallback value when the input string is empty.

### Parameters
- **string**  
  The value to check.
- **replaceWith**  
  The fallback value to return when `string` is empty.

### Returns
- Text: either `string` (if not empty) or `replaceWith` (if empty).

### Example
**Input**  
string = (empty)  
replaceWith = N/A  

**Output**  
N/A

### Notes
- Useful for display fields, labels, and formatted text where blanks are undesirable.

---

## PadLeft ( value_ ; character ; stringlength )

### Purpose
Pads the beginning of a value with a character until it reaches a target length.

### Parameters
- **value_**  
  The text to pad.
- **character**  
  The character to prepend repeatedly (for example `0`).
- **stringlength**  
  The target total length.

### Returns
- Text: the padded value.

### Example
**Input**  
value_ = 57  
character = 0  
stringlength = 5  

**Output**  
00057

### Notes
- Implemented using recursion.
- Common use case: generating fixed-length codes (like `00057`).

---

## RemoveTrailingComma ( Text )

### Purpose
Removes the last comma (final `,`) from a text string.

### Parameters
- **Text**  
  The input text containing comma separators.

### Returns
- Text: the same string with only the last comma removed.

### Example
**Input (Text)**  
A, B, C

**Output**  
A, B C

### Notes
- Removes only the last comma, not all commas.
- Does not insert spaces; it simply deletes the comma character.

---

## RemoveSpecialCharacters ( String )

### Purpose
Removes selected special characters from a string.

### Parameters
- **String**  
  The input text.

### Returns
- Text: the cleaned string with these characters removed: `"`, `/`, `'`.

### Example
**Input (String)**  
Cyril's "Folder"/Docs

**Output**  
Cyrils FolderDocs

### Notes
- Only removes the characters listed above.
- Useful for generating safer labels, filenames, or IDs from user-entered text.

---

## EscapeDoubleQuotes ( String )

### Purpose
Escapes double quotes in a string by converting `"` into `\"`.

### Parameters
- **String**  
  The input text that may contain double quotes.

### Returns
- Text: the escaped string.

### Example
**Input (String)**  
He said "Hello"

**Output**  
He said \"Hello\"

### Notes
- Useful when generating JSON or JavaScript strings to avoid broken syntax.

---

## EscapeSingleQuoteInHTML ( String )

### Purpose
Escapes single quotes (`'`) for HTML by converting them into the HTML entity `&#39;`.

### Parameters
- **String**  
  The input text that may contain single quotes.

### Returns
- Text: the escaped string.

### Example
**Input (String)**  
Cyril's laptop

**Output**  
Cyril&#39;s laptop

### Notes
- Useful when building HTML attributes or HTML content from user-entered text.
- Only escapes `'` in this implementation (it does not escape other characters like `&`, `<`, or `"`).

---

## DecodeURIComponent ( EncodedText )

### Purpose
Decodes selected URL-encoded (percent-encoded) sequences into readable characters for display. Also converts `%0A` into `<br>` for HTML line breaks.

### Parameters
- **EncodedText**  
  URL-encoded text containing `%xx` sequences.

### Returns
- Text: partially decoded output (only the encodings listed in the function are converted).

### Example
**Input (EncodedText)**  
Line%0A%E2%80%A2%20Item%201

**Output**  
Line<br>• Item 1

### Notes
- This is a partial decoder (it does not decode every possible `%xx` value).
- `%0A` is converted to `<br>`, which makes the output HTML-friendly.
- If an encoded sequence is not listed, it remains unchanged in the output.

---

## ConvertReturnsToBR ( string_ )

### Purpose
Converts return-delimited text into HTML by replacing each return (¶) with `<br>`.

### Parameters
- **string_**  
  Text that may contain returns (¶).

### Returns
- Text: HTML-friendly text with `<br>` tags inserted.

### Example
**Input (string_)**  
Line 1¶Line 2¶Line 3

**Output**  
Line 1<br>Line 2<br>Line 3

### Notes
- Useful when displaying FileMaker multi-line text in a WebViewer or HTML report.
- Only replaces returns; it does not escape HTML characters like `<` or `&`.

---

## ConvertLineBreakMarkersToReturns ( String )

### Purpose
Converts certain line break markers into FileMaker returns (`¶`).

### Parameters
- **String**  
  Text that may contain line break markers.

### Returns
- Text: the same text with markers converted to returns.

### Example
**Input (String)**  
Line 1yyyyLine 2<br>Line 3

**Output**  
Line 1¶Line 2¶Line 3

### Notes
- Replaces the literal string `yyyy` with a return (`¶`).
- Also converts `<br>` into a return (`¶`).
- Despite the name, it does not output HTML; it normalizes text into return-delimited format.

---

## JSNormalizeTextChain ( )

### Purpose
Returns a JavaScript replacement chain (as text) to normalize URL-encoded text for HTML display:
- converts encoded line breaks into `<br>`
- replaces pipe characters (`|`) with a placeholder string (`ppippe`)

### Parameters
- None

### Returns
- Text: a JavaScript `.replace(...)` chain that can be appended to a JS string expression.

### Example
**Input (conceptual JS input)**  
Hello%0AWorld|Now

**Output (after applying the chain)**  
Hello<br>WorldppippeNow

### Notes
- Intended to be pasted into JavaScript, not executed in FileMaker.
- Handles `%0D%0A`, `%0A`, and `%0D` line break encodings.
- Replaces `|` with `ppippe` as a placeholder (you can decode it later if needed).

---

## HTMLToTextStripTags ( text )

### Purpose
Converts basic HTML into readable plain text by:
- turning `<br>` and paragraphs into line breaks (`¶`)
- turning list items into bullet lines
- decoding common HTML entities
- removing any remaining HTML tags

### Parameters
- **text**  
  HTML or HTML-like text to convert.

### Returns
- Text: plain text formatted with FileMaker returns (`¶`).

### Example
**Input (text)**  
<p>Hello&nbsp;Cyril</p><ul><li>One</li><li>Two</li></ul>

**Output**  
Hello Cyril  
- One  
- Two

### Notes
- Converts `<li>` items into lines prefixed with `- `.
- Decodes: `&nbsp;`, `&amp;`, `&lt;`, `&gt;`.
- Recursively strips any other tags in `<...>`.

---

## FormatNumber ( Number ; DecimalPrecision ; ThousandSeparator )

### Purpose
Formats a number with thousand separators and a fixed number of decimal places.

### Parameters
- **Number**  
  The number to format (can be positive or negative).
- **DecimalPrecision**  
  How many decimal places to show (for example `0`, `2`, `3`).
- **ThousandSeparator**  
  The character used to group thousands in the integer part (for example `,`, `.`, or a space).

### Returns
- Text: the formatted number.

### Example
**Input**  
Number = 100000  
DecimalPrecision = 0  
ThousandSeparator = ,  

**Output**  
100,000

### Notes
- Rounds the value to the requested decimal precision.
- Supports negative numbers (adds `-` prefix).
- Intended for display formatting (reports, UI labels, etc.).

---

## AbbreviateNumber ( number ; precision )

### Purpose
Abbreviates a number using `K`, `M`, or `B` for thousands, millions, and billions.

### Parameters
- **number**  
  The number to abbreviate (supports negative values).
- **precision**  
  Number of decimal places to keep in the abbreviated result.

### Returns
- Text: abbreviated number like `1.2K`, `2.5M`, `3B`.

### Example
**Input**  
number = 1200  
precision = 2  

**Output**  
1.2K

### Notes
- Uses these suffixes:
  - `K` = thousands
  - `M` = millions
  - `B` = billions
- Values under 1,000 are returned as a rounded number without a suffix.

---

## Ordinal ( number )

### Purpose
Returns a number with its ordinal suffix (`st`, `nd`, `rd`, `th`).

### Parameters
- **number**  
  The input number (decimals are truncated to an integer).

### Returns
- Text: the integer plus its ordinal suffix (for example `1st`, `2nd`, `11th`).

### Example
**Input**  
number = 21  

**Output**  
21st

### Notes
- Uses `th` for 11, 12, and 13 (special cases).
- Uses only the integer part of the input.

---

## ShortenString ( string ; totalCharacters )

### Purpose
Returns the first N characters of a string, and appends an ellipsis (`…`) only when truncation happens.

### Parameters
- **string**  
  The text to shorten.
- **totalCharacters**  
  Maximum number of characters to keep.

### Returns
- Text: shortened text, optionally ending with `…`.

### Example
**Input**  
string = FileMaker is fast when you design it well  
totalCharacters = 12  

**Output**  
FileMaker is …

### Notes
- Uses a single ellipsis character (`…`) when the string is longer than the limit.

---

## Ellipsis ( Text_ ; MaxTextLength_ )

### Purpose
Truncates text to a maximum length and appends an ellipsis (`…`) when truncation occurs.

### Parameters
- **Text_**  
  The text to shorten.
- **MaxTextLength_**  
  Maximum number of characters to keep.

### Returns
- Text: shortened text with `…` when needed, otherwise the original text.

### Example
**Input**  
Text_ = Dokondo makes business stories easy to read  
MaxTextLength_ = 12  

**Output**  
Dokondo make…

### Notes
- Uses a single ellipsis character (`…`).
- If the text is already within the limit, nothing is appended.

---

## Singular ( string_ )

### Purpose
Attempts to convert a plural word to singular by removing common plural endings (`ies`, `es`, `s`).

### Parameters
- **string_**  
  The plural word.

### Returns
- Text: the word with the plural suffix removed.
- Empty if none of the endings match.

### Example
**Input (string_)**  
boxes

**Output**  
box

### Notes
- This is a simple suffix remover and does not handle irregular plurals.
- Words ending in `ies` are shortened by removing `ies` (no replacement to `y`).

---

## PluralizeText ( text ; quantity )

### Purpose
Returns the singular or plural form of the last word in a text based on a quantity.
Handles many common irregular nouns and several standard pluralization rules.

### Parameters
- **text**  
  The input text (only the last word is used).
- **quantity**  
  If `Abs(quantity) = 1`, the result is singular. Otherwise, plural rules are applied.

### Returns
- Text: the last word, singular or pluralized.

### Example
**Input**  
text = person  
quantity = 2  

**Output**  
people

### Notes
- Uses an internal JSON map of common irregular nouns (for example `person → people`, `child → children`).
- Applies common rules for `-s/-x/-z/-ch/-sh` (`+es`), `-y` (`-ies`), and `-f/-fe` (`-ves`) when not irregular.
- Returns only the last word (not the full phrase).

---

## PluralizeTerm ( term ; quantity )

### Purpose
Pluralizes only the last word in a term or phrase, based on quantity.

### Parameters
- **term**  
  A word or multi-word phrase (for example `Project Task`).
- **quantity**  
  If `quantity > 1`, the last word is pluralized. Otherwise, the term is returned unchanged.

### Returns
- Text: the original term with only the last word pluralized when needed.

### Example
**Input**  
term = Project Task  
quantity = 2  

**Output**  
Project Tasks

### Notes
- Uses `PluralizeText ( last_word ; quantity )` to pluralize the final word.
- Keeps all preceding words exactly as they were.

---

## AOrAn ( text_ )

### Purpose
Returns `a` or `an` based on the first character of a word.

### Parameters
- **text_**  
  The word to evaluate.

### Returns
- Text: `an` if the word starts with `a/e/i/o/u` (lowercase), otherwise `a`.

### Example
**Input (text_)**  
orange

**Output**  
an

### Notes
- Checks only the first character and only for lowercase vowels.
- Does not trim leading spaces.
- Uses spelling, not pronunciation.

---

## FullNameTitleFirstMiddleLast ( title ; first_name ; middle_name ; last_name )

### Purpose
Builds a full name in the order: Title, First Name, Middle Name, Last Name.  
Only non-empty parts are included.

### Parameters
- **title**  
  Optional title (for example `Mr.`, `Mrs.`, `Dr.`).
- **first_name**  
  First name.
- **middle_name**  
  Middle name (optional).
- **last_name**  
  Last name (optional).

### Returns
- Text: the formatted full name.

### Example
**Input**  
title = Dr.  
first_name = Cyril  
middle_name = Kofi  
last_name = Amegah  

**Output**  
Dr. Cyril Kofi Amegah

### Notes
- Skips any empty parts without leaving double spaces.

---

## FullNameTitleLastFirstMiddle ( title ; first_name ; middle_name ; last_name )

### Purpose
Builds a full name in the order: Title, Last Name, First Name, Middle Name.
Formats the last name in **bold** and places a comma after it.

### Parameters
- **title**  
  Optional title (for example `Mr.`, `Mrs.`, `Dr.`).
- **first_name**  
  First name.
- **middle_name**  
  Middle name (optional).
- **last_name**  
  Last name (optional).

### Returns
- Text: the formatted full name.

### Example
**Input**  
title = Dr.  
first_name = Cyril  
middle_name = Kofi  
last_name = Amegah  

**Output**  
Dr. AMEGAH, Cyril Kofi

### Notes
- The last name is styled using `TextStyleAdd ( last_name ; Bold )`.
- Empty parts are skipped without leaving extra spaces.

---

## FullNameLastFirstMiddleTitle ( title ; first_name ; middle_name ; last_name )

### Purpose
Builds a full name in the order: Last Name, First Name, Middle Name, then Title in parentheses.

### Parameters
- **title**  
  Optional title (displayed at the end in parentheses).
- **first_name**  
  First name.
- **middle_name**  
 Middle name (optional).
- **last_name**  
  Last name (optional).

### Returns
- Text: the formatted full name.

### Example
**Input**  
title = Dr.  
first_name = Cyril  
middle_name = Kofi  
last_name = Amegah  

**Output**  
Amegah, Cyril Kofi (Dr.)

### Notes
- If `title` is present, it is appended at the end as `(title)`.
- Empty parts are skipped without leaving extra commas or spaces.

---

## FullNameFirstMiddleLast ( first_name ; middle_name ; last_name )

### Purpose
Builds a full name in the order: First Name, Middle Name, Last Name.  
Only non-empty parts are included.

### Parameters
- **first_name**  
  First name (optional).
- **middle_name**  
  Middle name (optional).
- **last_name**  
  Last name (optional).

### Returns
- Text: the formatted full name.

### Example
**Input**  
first_name = Cyril  
middle_name = Kofi  
last_name = Amegah  

**Output**  
Cyril Kofi Amegah

### Notes
- Skips any empty parts without leaving double spaces.

---

## FullNameFirstLast ( first_name ; last_name )

### Purpose
Builds a name in the order: First Name, Last Name.  
Only non-empty parts are included.

### Parameters
- **first_name**  
  First name (optional).
- **last_name**  
  Last name (optional).

### Returns
- Text: the formatted name.

### Example
**Input**  
first_name = Cyril  
last_name = Amegah  

**Output**  
Cyril Amegah

### Notes
- Skips empty parts without leaving double spaces.

---

## AbbreviateText ( text )

### Purpose
Returns initials from a phrase by taking the first letter of each word (uppercase) and formatting with periods.  
Hyphenated words are preserved as hyphenated initials (for example `Jean-Paul` → `J.-P.`).

### Parameters
- **text**  
  The input phrase or name.

### Returns
- Text: initials formatted like `P. W.` or `J.-P. S.`

### Example
**Input (text)**  
Jean-Paul Sartre

**Output**  
J.-P. S.

### Notes
- Hyphens are handled so hyphenated words produce hyphenated initials.
- Intended to be used with `AbbreviateTextCustom ( text ; spaces ; hyphens ; periods )` for additional formatting control.

---

## AbbreviateTextCustom ( text ; spaces ; hyphens ; periods )

### Purpose
Creates initials from a name or phrase and lets you control whether spaces, hyphens, and periods are included.

### Parameters
- **text**  
  The input text to abbreviate (for example a person name).
- **spaces**  
  `0` = remove spaces  
  `1` = keep spaces
- **hyphens**  
  `0` = remove hyphens (or convert hyphen styling to non-hyphen output depending on the mode)  
  `1` = keep hyphens
- **periods**  
  `0` = remove all periods  
  `1` = remove all periods and add a trailing period at the end  
  `2` = keep periods as produced by `AbbreviateText`

### Returns
- Text: initials formatted according to the chosen options.

### Example
**Input**  
text = Mary Jane  
spaces = 0  
hyphens = 0  
periods = 2  

**Output**  
M.J.

### Notes
- Depends on `AbbreviateText ( text )` for the base initials.
- Best used for name abbreviations, short labels, and compact UI text.

---

## DateInWordsShortMonth ( _Date )

### Purpose
Formats a date as `Mon D, YYYY` using a 3-letter month abbreviation.

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: formatted date (example: `Dec 13, 2025`).

### Example
**Input (_Date)**  
2025-12-13

**Output**  
Dec 13, 2025

### Notes
- Month is derived from `MonthName ( _Date )` and shortened to 3 letters.

---

## DateInWordsShortMonthNoYear ( _Date )

### Purpose
Formats a date as `Mon D` using a 3-letter month abbreviation (no year).

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: formatted date (example: `Dec 13`).

### Example
**Input (_Date)**  
2025-12-13

**Output**  
Dec 13

### Notes
- Month is derived from `MonthName ( _Date )` and shortened to 3 letters.

---

## DateInWordsShortMonthNDay ( _Date )

### Purpose
Formats a date as `Day, Mon D, YYYY` using 3-letter weekday and month abbreviations.

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: formatted date (example: `Sat, Dec 13, 2025`).

### Example
**Input (_Date)**  
2025-12-13

**Output**  
Sat, Dec 13, 2025

### Notes
- Weekday is derived from `DayName ( _Date )` and shortened to 3 letters.
- Month is derived from `MonthName ( _Date )` and shortened to 3 letters.

---

## DateInWordsShortMonthNDayNoYear ( _Date )

### Purpose
Formats a date as `Day, Mon D` using 3-letter weekday and month abbreviations (no year).

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: formatted date (example: `Sat, Dec 13`).

### Example
**Input (_Date)**  
2025-12-13

**Output**  
Sat, Dec 13

### Notes
- Weekday is derived from `DayName ( _Date )` and shortened to 3 letters.
- Month is derived from `MonthName ( _Date )` and shortened to 3 letters.

---

## DateInWordsMonthNYear ( _Date )

### Purpose
Formats a date as `Month, YYYY` using the full month name.

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: formatted month and year (example: `December, 2025`).

### Example
**Input (_Date)**  
2025-12-13

**Output**  
December, 2025

### Notes
- Uses `MonthName ( _Date )` for the full month name.

---

## DateInWordsLongMonth ( _Date )

### Purpose
Formats a date as `Month D, YYYY` using the full month name.

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: formatted date (example: `December 13, 2025`).

### Example
**Input (_Date)**  
2025-12-13

**Output**  
December 13, 2025

### Notes
- Uses `MonthName ( _Date )` for the full month name.

---

## RelativeDateInWords ( _Date )

### Purpose
Returns a friendly relative label for dates near today (up to 3 days before/after).  
Dates outside that range are returned in short date format.

### Parameters
- **_Date**  
  The date to format.

### Returns
- Text: `Yesterday`, `Today`, `Tomorrow`, `2 days ago`, `In 2 days`, etc.  
  Otherwise: a formatted date like `Dec 13, 2025`.

### Example
Assuming current date is 2025-12-13:

**Input (_Date)**  
2025-12-12

**Output**  
Yesterday

### Notes
- Uses `Get ( CurrentDate )` as the reference point.
- Uses `DateInWordsShortMonth ( _Date )` as the fallback format.

---

## MySQLDateToFMPDateText ( MySQL_Date )

### Purpose
Converts a MySQL date string (`YYYY-MM-DD`) into `DD/MM/YYYY` format.

### Parameters
- **MySQL_Date**  
  A date string in MySQL format: `YYYY-MM-DD`.

### Returns
- Text: the reformatted date string `DD/MM/YYYY`.

### Example
**Input (MySQL_Date)**  
2025-12-13

**Output**  
13/12/2025

### Notes
- Returns a text date string.
- If you need a real FileMaker Date value, convert the output according to your file’s date settings.

---

## MySQLTimestampToFMPTimestampText ( MySQL_Timestamp )

### Purpose
Converts a MySQL timestamp string (`YYYY-MM-DD HH:MM:SS`) into `DD/MM/YYYY HH:MM:SS` format.

### Parameters
- **MySQL_Timestamp**  
  A timestamp string in MySQL format: `YYYY-MM-DD HH:MM:SS`.

### Returns
- Text: the reformatted timestamp string `DD/MM/YYYY HH:MM:SS`.

### Example
**Input (MySQL_Timestamp)**  
2025-12-13 14:05:09

**Output**  
13/12/2025 14:05:09

### Notes
- Returns a text timestamp string.
- If you need a real FileMaker Timestamp value, convert the output according to your file’s timestamp settings.

---

## FMPDateTextToMySQLDate ( FMP_Date )

### Purpose
Converts a date string from `DD/MM/YYYY` format into MySQL `YYYY-MM-DD` format.

### Parameters
- **FMP_Date**  
  A date string in `DD/MM/YYYY` format.

### Returns
- Text: the reformatted date string `YYYY-MM-DD`.

### Example
**Input (FMP_Date)**  
13/12/2025

**Output**  
2025-12-13

### Notes
- Expects a text date formatted as `DD/MM/YYYY`.
- If you have a FileMaker Date value, convert it to the expected format before using this function.

---

## DateInShortWordsToFMPDate ( inputDate )

### Purpose
Converts a short-word date string (3-letter month name) into a FileMaker Date value.

### Parameters
- **inputDate**  
  A date string containing a short month name like `Jan`, `Feb`, `Mar`, etc.  
  Expected shape: `DayName, Mon DD YYYY` (comma is optional).

### Returns
- Date: a FileMaker Date value created using `Date ( monthNumber ; dayNumber ; year_ )`.

### Example
**Input (inputDate)**  
Sat, Dec 13 2025

**Output**  
13/12/2025

### Notes
- Month names must be exactly: `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`.
- Output display depends on the file’s date formatting settings.

---

## MinutesToTextTime ( Minutes )

### Purpose
Converts a duration in minutes into a readable text string using hours and minutes.

### Parameters
- **Minutes**  
  Total number of minutes.

### Returns
- Text: formatted duration such as `45 min`, `1 hr 15 min`, or `2 hrs`.

### Example
**Input (Minutes)**  
75

**Output**  
1 hr 15 min

### Notes
- Uses hours for values of 60 minutes or more.
- Adds the minutes remainder only when it is greater than 0.
- Hours are rounded, so some edge cases may look unexpected for certain values.

---

## Elapsed ( StartDate ; EndDate )

### Purpose
Returns an approximate elapsed duration between two dates as a readable string: `X Years Y Months Z Days`.

### Parameters
- **StartDate**  
  The starting date.
- **EndDate**  
  The ending date.

### Returns
- Text: elapsed duration in years, months, and days.

### Example
**Input**  
StartDate = 2025-01-01  
EndDate = 2026-01-01  

**Output**  
1 Years 0 Months 0 Days

### Notes
- Uses average values (365.25 days per year and 30.4375 days per month), so results are approximate.
- Intended for friendly display, not strict calendar-accurate date math.

---

## ElapsedTime ( TStampBegin ; TStampEnd ; Format )

### Purpose
Calculates elapsed time between two timestamp fields and returns the result in a chosen format.

### Parameters
- **TStampBegin**  
  Start timestamp (must be a timestamp field/value).
- **TStampEnd**  
  End timestamp (must be a timestamp field/value).
- **Format**  
  One of: `Seconds`, `Minutes`, `Hours`, `Days`, `String`.

### Returns
- Number when `Format = Seconds`
- Text for `Minutes`, `Hours`, `Days`, and `String`

### Example
**Input**  
TStampBegin = 2025-12-13 10:00:00  
TStampEnd = 2025-12-13 12:15:30  
Format = String  

**Output**  
2 hrs, 15 mins

### Notes
- In `String` format, seconds are shown only when days, hours, and minutes are all zero.
- `Minutes`, `Hours`, and `Days` may include decimals because they are calculated from total seconds.

---

## TimeNoSeconds ( _Time )

### Purpose
Formats a time value as a 12-hour clock string without seconds, including an AM or PM suffix.

### Parameters
- **_Time**  
  A FileMaker Time value.

### Returns
- Text: formatted time like `2:15 PM`.

### Example
**Input (_Time)**  
14:15:30

**Output**  
2:15 PM

### Notes
- Uses `Mod ( Hour ( _Time ) ; 12 )`, so 12 o’clock can display as `0:xx`.
- Minutes are not zero-padded in this implementation.
- The AM or PM suffix is taken from the last two characters of the time’s text format.

---

## FormatTimeHHMM12 ( theTime )

### Purpose
Formats a time into 12-hour `h:mm AM/PM` format with zero-padded minutes.

### Parameters
- **theTime**  
  A value that can be interpreted as a FileMaker Time (time value or time-like text).

### Returns
- Text: formatted time like `2:05 PM`.
- Empty if the input cannot be converted to a valid time.

### Example
**Input (theTime)**  
14:05:59

**Output**  
2:05 PM

### Notes
- Uses `GetAsTime` to parse the input.
- Converts 0 hour to `12` for midnight.
- Minutes are always shown as two digits.

---

## RelativeElapsedPeriodLong ( Timestamp1 ; Timestamp2 )

### Purpose
Returns a human-friendly description of the elapsed time between two timestamps using the most appropriate unit (minutes, hours, days, weeks, months, or years) with pluralization.

### Parameters
- **Timestamp1**  
  First timestamp.
- **Timestamp2**  
  Second timestamp.

### Returns
- Text: elapsed period such as `5 mins`, `2 hours`, `1 day`, `3 weeks`, `6 months`, `2 years`.

### Example
**Input**  
Timestamp1 = 2025-12-13 10:00:00  
Timestamp2 = 2025-12-13 12:05:00  

**Output**  
2 hours

### Notes
- Uses absolute difference, so the order of timestamps does not matter.
- Uses approximate conversions:
  - month = 30 days
  - year = 365 days
- Values are rounded down to whole units.

---

## RelativeElapsedPeriodShort ( Timestamp1 ; Timestamp2 )

### Purpose
Returns a compact elapsed time label between two timestamps using:
- minutes (`m`)
- hours (`h`)
- days (`d`)
- weeks (`w`)

### Parameters
- **Timestamp1**  
  First timestamp.
- **Timestamp2**  
  Second timestamp.

### Returns
- Text: elapsed period like `15m`, `2h`, `6d`, `3w`.

### Example
**Input**  
Timestamp1 = 2025-12-13 10:00:00  
Timestamp2 = 2025-12-13 10:42:00  

**Output**  
42m

### Notes
- Uses absolute difference, so order does not matter.
- Values are rounded down to whole units.
- For differences under 60 seconds, the result can be `0m`.

---

## RelativePeriodShort ( Timestamp1 ; Timestamp2 )

### Purpose
Returns a compact relative time phrase showing how `Timestamp1` relates to `Timestamp2`.

### Parameters
- **Timestamp1**  
  The timestamp being described.
- **Timestamp2**  
  The reference timestamp.

### Returns
- Text:
  - `Xm ago`, `Xh ago`, `Xd ago`, `Xw ago` when Timestamp1 is earlier than Timestamp2
  - `in Xm`, `in Xh`, `in Xd`, `in Xw` when Timestamp1 is later than Timestamp2
  - `now` when both timestamps are equal

### Example
**Input**  
Timestamp1 = 2025-12-13 10:00:00  
Timestamp2 = 2025-12-13 10:42:00  

**Output**  
42m ago

### Notes
- Uses whole units (rounded down).
- Unit selection: minutes < 60, hours < 24, days < 7, otherwise weeks.
- For differences under 60 seconds, output can be `0m ago` / `in 0m` unless the timestamps are exactly equal.

---

## Age ( DOB )

### Purpose
Calculates age in years from a date of birth.

### Parameters
- **DOB**  
  Date of birth.

### Returns
- Number: age in years.
- Empty if `DOB` is empty.

### Example
Assuming current date is 2025-12-13:

**Input (DOB)**  
2000-12-20

**Output**  
24

### Notes
- Subtracts 1 if the birthday has not yet occurred in the current year.
- Uses `Get ( CurrentDate )` as the reference date.

---

## WeekdayCount ( StartDate ; EndDate )

### Purpose
Returns the number of weekdays (Monday to Friday) between two dates, including both StartDate and EndDate.

### Parameters
- **StartDate**  
  The first date in the range.
- **EndDate**  
  The last date in the range.

### Returns
- Number: count of weekdays in the date range.

### Example
**Input**  
StartDate = 2025-12-12  
EndDate = 2025-12-15  

**Output**  
2

### Notes
- Excludes Saturdays and Sundays.
- Includes both StartDate and EndDate in the calculation.
- Does not account for holidays.
- Depends on `DayName ( StartDate )` matching English day names (Monday, Tuesday, etc.).

---

## MondayOfGivenWeek ( week_ ; year_ )

### Purpose
Returns the date of the Monday for a given week number in a given year (ISO week logic).

### Parameters
- **week_**  
  Week number (for example `1` to `52/53` depending on the year).
- **year_**  
  The year (4-digit).

### Returns
- Date: the Monday date for the specified week and year.

### Example
**Input**  
week_ = 1  
year_ = 2025  

**Output**  
(Monday date of ISO week 1 in 2025)

### Notes
- Uses the rule that January 4th is always in ISO week 1.
- Useful for schedules and week-based reporting.

---

## AddDaysToDate ( Date_ ; DaysToAdd_ )

### Purpose
Adds a number of days to a date and returns the resulting date.

### Parameters
- **Date_**  
  The starting date.
- **DaysToAdd_**  
  Number of days to add (use a negative number to subtract days).

### Returns
- Date: the adjusted date.

### Example
**Input**  
Date_ = 2025-12-13  
DaysToAdd_ = 5  

**Output**  
2025-12-18

### Notes
- Negative values move backward in time.

---

## AddWeeksToDate ( Date_ ; WeeksToAdd_ )

### Purpose
Adds a number of weeks to a date and returns the resulting date.

### Parameters
- **Date_**  
  The starting date.
- **WeeksToAdd_**  
  Number of weeks to add (use a negative number to subtract weeks).

### Returns
- Date: the adjusted date.

### Example
**Input**  
Date_ = 2025-12-13  
WeeksToAdd_ = 2  

**Output**  
2025-12-27

### Notes
- Internally treats 1 week as 7 days.

---

## AddMonthsToDate ( Date_ ; MonthsToAdd_ )

### Purpose
Adds months to a date by adjusting the month component and rebuilding the date.

### Parameters
- **Date_**  
  The starting date.
- **MonthsToAdd_**  
  Number of months to add.

### Returns
- Date: the adjusted date.

### Example
**Input**  
Date_ = 2025-10-13  
MonthsToAdd_ = 3  

**Output**  
2026-01-13

### Notes
- Handles month rollover only when the resulting month is greater than 12 (adds 1 year).
- Does not handle negative month values or large month offsets beyond a single year.
- If the resulting day does not exist in the target month (for example 31st), FileMaker will normalize the date.

---

## AddYearsToDate ( Date_ ; YearsToAdd_ )

### Purpose
Adds years to a date by keeping the same month/day and incrementing the year.

### Parameters
- **Date_**  
  The starting date.
- **YearsToAdd_**  
  The number of years to add (use a negative number to subtract years).

### Returns
- Date: the adjusted date.

### Example
**Input**  
Date_ = 2025-12-13  
YearsToAdd_ = 1  

**Output**  
2026-12-13

### Notes
- Uses: `Date ( Month ( Date_ ) ; Day ( Date_ ) ; Year ( Date_ ) + YearsToAdd_ )`
- Dates like Feb 29 may be normalized when the target year is not a leap year.

---

## AddPeriodToDate ( Date_ ; NumberToAdd_ ; PeriodTypeToAdd_ )

### Purpose
Adds a specified period (days, weeks, months, years) to a date based on a period type string.

### Parameters
- **Date_**  
  The starting date.
- **NumberToAdd_**  
  How many units to add.
- **PeriodTypeToAdd_**  
  One of: `Hours`, `Days`, `Weeks`, `Months`, `Years`.

### Returns
- Date: the adjusted date (or the original date for `Hours`).

### Example
**Input**  
Date_ = 2025-12-13  
NumberToAdd_ = 5  
PeriodTypeToAdd_ = Days  

**Output**  
2025-12-18

### Notes
- `Hours` currently returns the original date (no time calculation).
- Depends on helper functions: `AddDaysToDate`, `AddWeeksToDate`, `AddMonthsToDate`, `AddYearsToDate`.
- If an unsupported period type is provided, the result is empty.

---

## RandomInteger ( start ; stop )

### Purpose
Returns a random integer between two numbers (inclusive).

### Parameters
- **start**  
  The minimum integer.
- **stop**  
  The maximum integer.

### Returns
- Number: a random whole number between `start` and `stop` (inclusive).

### Example
**Input**  
start = 1  
stop = 6  

**Output (example)**  
4

### Notes
- Output is random, so it will vary each time.
- Designed to behave correctly even when negative ranges are used.

---

## GeneratePassword ( Len ; Letters ; Numbers ; Symbols )

### Purpose
Generates a random password using selected character groups (letters, numbers, symbols).

### Parameters
- **Len**  
  Target password length.
- **Letters**  
  `0` = none  
  `1` = uppercase only  
  `2` = lowercase only  
  `3` = uppercase + lowercase
- **Numbers**  
  `0` = exclude, `1` = include digits `0-9`
- **Symbols**  
  `0` = exclude, `1` = include symbols from this set: `$%&@#~`

### Returns
- Text: a randomly generated password.

### Example
**Input**  
Len = 12  
Letters = 3  
Numbers = 1  
Symbols = 0  

**Output (example)**  
aQ7mT2pL9xWb

### Notes
- Output is random, so it will vary each time.
- Character groups are included in the pool, but it is not guaranteed that each selected group appears at least once.
- Uses recursion and temporary global variables internally, then clears them.

---

## GenerateNextRecordCode ( Alphabets ; NumericLength ; LastSerial )

### Purpose
Generates the next sequential record code using a text prefix and a zero-padded number.

### Parameters
- **Alphabets**  
  The prefix to place at the start of the code (for example `INV` or `EMP-`).
- **NumericLength**  
  The fixed length of the numeric portion (pads with leading zeros).
- **LastSerial**  
  The last used serial number (the function increments this by 1).

### Returns
- Text: the next code in the sequence.

### Example
**Input**  
Alphabets = INV  
NumericLength = 5  
LastSerial = 24  

**Output**  
INV00025

### Notes
- Numeric part is always padded to `NumericLength` using leading zeros.
- Assumes `LastSerial` is a number.

---

## GenerateNextCode ( prefix ; serialLength ; previousCode )

### Purpose
Generates the next sequential code by extracting the numeric serial portion from `previousCode`, incrementing it, zero-padding it to `serialLength`, and prefixing it with `prefix`.

### Parameters
- **prefix**  
  The text prefix (example: `INV-`, `CUS`).
- **serialLength**  
  The desired length of the numeric serial portion.
- **previousCode**  
  The previous code value (expected to start with `prefix`).

### Returns
- Text: the next code, formatted as `prefix + zero-padded serial`.

### Example
**Input**  
prefix = INV-  
serialLength = 5  
previousCode = INV-00042  

**Output**  
INV-00043

### Notes
- Assumes `previousCode` begins with `prefix`.
- Assumes the serial portion is numeric.
- Padding uses a fixed 10-zero template; ensure `serialLength` is within that range.

---

## GetDevice ( )

### Purpose
Returns a readable device/platform name based on FileMaker's `Get ( Device )`.

### Parameters
- None

### Returns
- Text: `Mac`, `Windows`, `iPad`, `iPhone`, `Android`, or `Unknown`.

### Example
If FileMaker returns `Get ( Device ) = 1`

**Output**  
Mac

### Notes
- Useful for platform-specific UI decisions, behaviors, or messaging.

---

## GetExtension ( Some Filename )

### Purpose
Returns the file extension (the text after the last `.`) from a filename.

### Parameters
- **Some Filename**  
  The filename or path as text.

### Returns
- Text: the extension (for example `pdf`, `png`, `gz`).

### Example
**Input (Some Filename)**  
archive.tar.gz

**Output**  
gz

### Notes
- Returns only the last extension segment.
- If there is no `.`, the result will be the entire input string.

---

## GetFileSize ( Bytes ; Precision ; UOM ; Format )

### Purpose
Converts a byte count into a human-readable file size string (KB, MB, GB, etc.) with configurable precision, unit system, and label style.

### Parameters
- **Bytes**  
  Raw size in bytes.
- **Precision**  
  Number of decimal places to round to (defaults to `0` when empty).
- **UOM**  
  Unit of measure base:
  - empty = binary (`1024`)
  - `metric` or `M` = metric (`1000`)
  - `binary` or `B` = binary (`1024`)
- **Format**  
  Label style:
  - empty = no label
  - `short` or `S` = `KB`, `MB`, `GB`, etc.
  - `long` or `L` = `Kilobyte(s)`, `Megabyte(s)`, `Gigabyte(s)`, etc.

### Returns
- Text: formatted size, optionally with a unit label.

### Example
**Input**  
Bytes = 430714880  
Precision = 0  
UOM = (empty)  
Format = short  

**Output**  
411 MB

### Notes
- Uses logarithms to pick the best magnitude up to Yottabytes.
- Pluralizes long labels when the numeric size is not 1 (for example `2 Megabytes`).

---

## GenerateFileIconHTML ( Extension )

### Purpose
Returns an HTML Font Awesome `<i>` icon tag based on a file extension, for use in WebViewer/HTML UIs.

### Parameters
- **Extension**  
  File extension (example: `pdf`, `jpg`, `xlsx`).

### Returns
- Text: an HTML `<i>` tag for the matching icon.
- Empty string when the extension is not recognized.

### Extension Mapping
- `pdf` → file-pdf icon (red)
- `png`, `jpg`, `jpeg`, `webp` → file-image icon (purple)
- `csv`, `xlsx` → file-excel icon (green)
- `doc`, `txt`, `tab`, `log` → file-word icon (blue)
- `zip`, `rar` → file-archive icon (orange)

### Example
**Input (Extension)**  
pdf

**Output**  
<i class='fas fa-file-pdf icon' style='color: red;'></i>

### Notes
- Assumes Font Awesome is available in the HTML page.
- Consider lowercasing the extension before calling for consistent matching.

---

## RecordStatus ( status )

### Purpose
Maps a record status text to a color label string for UI display or conditional formatting.

### Parameters
- **status**  
  The record status text.

### Returns
- Text: `gray`, `yellow`, `red`, or `green`.
- Empty if the status value is not recognized.

### Status Mapping
- **gray**
  - Draft
  - Not Submitted
  - Not Filled
  - Not Completed
  - Walk-In

- **yellow**
  - Pending
  - Pending Approval
  - Low Stock
  - Submitted
  - Paused
  - Will be Meeting
  - Pending Feedback

- **red**
  - Inactive
  - Out of Stock
  - Denied
  - Planning To Engage
  - Started To Engage
  - Made First Contact
  - Not Prospect

- **green**
  - Active
  - Completed
  - Complete
  - Done
  - In Stock
  - Approved
  - Appraised
  - Posted
  - Dispensed
  - Client
  - Prospect

### Example
**Input (status)**  
Pending Approval

**Output**  
yellow

### Notes
- Exact matching is used, so spelling and capitalization must match your list.

---

## Pronoun ( Gender ; Type )

### Purpose
Returns a pronoun based on gender and a requested pronoun type.

### Parameters
- **Gender**  
  Expected values: `Male`, `Female`.  
  Any other value returns a neutral pronoun option.
- **Type**  
  One of:
  - `His/Her`
  - `Him/Her`
  - `He/She`
  - `His/Hers`

### Returns
- Text: the selected pronoun.

### Example
**Input**  
Gender = Male  
Type = He/She  

**Output**  
He

### Notes
- Neutral outputs used when gender is not `Male` or `Female`:
  - `Their`, `Them`, `They`, `Theirs`
- Unsupported `Type` values return empty.

---

## ExecuteSQLResultToJSON ( sqlResult ; fieldSub ; rowSub ; fieldList ; limit )

### Purpose
Converts an `ExecuteSQL` text result into a JSON object with:
- `data`: an array of row objects
- `records`: the row count  
Returns an error JSON object when inputs do not match expectations.

### Parameters
- **sqlResult**  
  The raw text returned from `ExecuteSQL`.
- **fieldSub**  
  The column delimiter used inside each row (must be a unique string not present in data).
- **rowSub**  
  The row delimiter used between rows (must be a unique string not present in data).
- **fieldList**  
  Return-delimited list of JSON keys matching SQL columns.  
  You can cast types by appending:
  - `|JSONNumber`
  - `|JSONBoolean`  
  Default type is string.
- **limit**  
  Max number of rows to include. If `0`, all rows are included.

### Returns
**Success**
- JSON with keys:
  - `data` (array)
  - `records` (number)

**Failure**
- JSON with keys:
  - `error` = 1
  - `message` (text)

### Example
**Input (conceptual)**
- fieldSub = `|#!`
- rowSub = `[*>`
- fieldList:
  - name
  - age|JSONNumber

**Output (shape)**
{
  "data": [
    { "name": "John", "age": 12 },
    { "name": "Ama", "age": 10 }
  ],
  "records": 2
}

### Notes
- `fieldList` count must match the number of SQL columns.
- Delimiter strings must not appear in real data.
- Uses an internal placeholder to temporarily replace real returns inside field values.

---

## SQLFieldNames ( _sqlText )

### Purpose
Extracts the field/column list from an SQL `SELECT ... FROM ...` statement and returns it as a return-delimited list.

### Parameters
- **_sqlText**  
  The SQL statement text.

### Returns
- Text: selected column expressions, one per line.

### Example
**Input (_sqlText)**  
SELECT t1."First Name", t1."Last Name", t2."Age" FROM People t1

**Output**  
First Name  
Last Name  
Age

### Notes
- Designed for simple SQL shaped like `SELECT ... FROM ...`.
- Removes `"` and only strips hard-coded aliases `t1.` and `t2.`.
- Does not fully parse complex SQL (functions, nested selects, other alias patterns).

---

## IsValidEmailFormat ( _email )

### Purpose
Validates the basic *format* of an email address. Returns `1` when the email is correctly formatted, otherwise `0`.

### Parameters
- **_email**  
  Email address text to validate.

### Returns
- Number:
  - `1` = valid format
  - `0` = invalid format

### Example
**Input (_email)**  
cyril.amegah@example.com

**Output**  
1

### Notes
- This checks format only (it does not verify the domain exists).
- Empty values return `1` in the current implementation because of `IsEmpty ( _email ) or ...`.
- Rules enforced include:
  - exactly one `@`
  - allowed characters only
  - no `..`
  - at least one `.` after the `@`
  - first and last character are alphanumeric

---

## Base64EncodeFile ( file )

### Purpose
Encodes a container/file value into a clean Base64 payload string:
- removes line breaks and hidden separator characters
- converts URL-safe Base64 (`_` and `-`) into standard Base64 (`/` and `+`)
- strips any `data:...base64,` header and returns only the Base64 content

### Parameters
- **file**  
  A FileMaker container value or file data to encode.

### Returns
- Text: Base64 payload only (no header, no line breaks).

### Example
**Input (file)**  
(container holding `report.pdf`)

**Output**  
A Base64 string like `JVBERi0xLjQKJc...`

### Notes
- The output is the Base64 content after the first comma in the encoded string.
- Useful for APIs that expect a raw Base64 payload rather than a full data URL.