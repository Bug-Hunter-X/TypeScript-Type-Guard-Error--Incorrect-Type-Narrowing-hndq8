# TypeScript Type Guard Error: Incorrect Type Narrowing

This repository demonstrates a common error in TypeScript related to type guards.  The `processNumber` function attempts to handle both numbers and strings, but an error occurs due to the type guard not correctly narrowing the type of the `num` parameter in all cases. This can lead to runtime errors if not handled properly.

The bug is in the `processNumber` function where the type guard does not properly check and handle all possible types of `num`.  The solution demonstrates how to accurately narrow down the type using TypeScript's type guards.