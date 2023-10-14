# NetSuite-UPC-Validation-Script
Netsuite UPC Validation Script

The purpose of this script is to add data validation functionality to NetSuite's vanilla field 'upccode.'

Out of the box, 'upccode' is a free-text field allowing any string of up to 999 characters. Obviously, this is not conducive to data validation.

Once set up, this script prevents users from saving an item record without a UPC field that is either blank or contains 12 characters.
