
# Variable Naming Conventions

## Javascript

<table><tr><th>Type</th><th>Style</th><th>Form</th><th>Examples</th></tr><tr><td valign="top">boolean</td><td valign="top">camelcase</td><td valign="top">form of a question</td><td valign="top">

```text
isAvailable
hasMore
```
</td></tr><tr><td valign="top">class</td><td valign="top">cap words</td><td valign="top">noun</td><td valign="top">

```text
Person
PropertyClaim
```
</td></tr><tr><td valign="top">components</td><td valign="top">pascal case</td><td valign="top">noun</td><td valign="top">

```text
DisplayPanel
PersonList
```
</td></tr><tr><td valign="top">constant</td><td valign="top">upper snake case</td><td valign="top">noun</td><td valign="top">

```text
MAX_COUNT
TOTAL
```
</td></tr><tr><td valign="top">filename</td><td valign="top">kebab lower case</td><td valign="top">noun</td><td valign="top">

```text
person-list.component.ts
person-list.component.html
```
</td></tr><tr><td valign="top">function</td><td valign="top">camelcase</td><td valign="top">verb</td><td valign="top">

```text
calculateROI
reverseString
```
</td></tr><tr><td valign="top">function (private)</td><td valign="top">camelcase<br>prepend underscore</td><td valign="top">verb</td><td valign="top">

```text
_calculateROI
_reverseString
```
</td></tr><tr><td valign="top">global variable</td><td valign="top">mutable - camelcase<br>immutable - upper snake case</td><td valign="top">noun</td><td valign="top">

```text
personName
MAX_COUNT
```
</td></tr><tr><td valign="top">method</td><td valign="top">camelcase</td><td valign="top">verb</td><td valign="top">

```text
getPersonName
setPersonName
```
</td></tr><tr><td valign="top">variable</td><td valign="top">camelcase</td><td valign="top">noun</td><td valign="top">

```text
personName
associateId
```
</td></tr></table>

## Python

<table><tr><th>Type</th><th>Style</th><th>Form</th><th>Examples</th></tr><tr><td valign="top">boolean</td><td valign="top">lower snake case</td><td valign="top">form of a question</td><td valign="top">

```text
is_available
has_more
```
</td></tr><tr><td valign="top">class</td><td valign="top">cap words</td><td valign="top">noun<br>first argument must be ```cls```</td><td valign="top">

```text
Person(cls,...
PropertyClaim(cls,...
```
</td></tr><tr><td valign="top">constant</td><td valign="top">upper snake case</td><td valign="top">noun</td><td valign="top">

```text
MAX_COUNT
TOTAL
```
</td></tr><tr><td valign="top">filename</td><td valign="top">kebab lower case</td><td valign="top">noun</td><td valign="top">

```text
person-list.component.ts
person-list.component.html
```
</td></tr><tr><td valign="top">function</td><td valign="top">lower snake case</td><td valign="top">verb<br>first argument must be ```self```</td><td valign="top">

```text
calculate_roi(self, ...
reverse_string(self, ...
```
</td></tr><tr><td valign="top">function (private)</td><td valign="top">lower snake case<br>prepend underscore</td><td valign="top">verb</td><td valign="top">

```text
_calculate_roi
_reverse_string
```
</td></tr><tr><td valign="top">global variable</td><td valign="top">lower snake case</td><td valign="top">noun</td><td valign="top">

```text
person_name
max_count
```
</td></tr><tr><td valign="top">package</td><td valign="top">lower snake case</td><td valign="top">noun</td><td valign="top">

```text
form
customer_service
```
</td></tr><tr><td valign="top">variable</td><td valign="top">lower snake case</td><td valign="top">noun</td><td valign="top">

```text
person_name
associate_id
```
</td></tr></table>
