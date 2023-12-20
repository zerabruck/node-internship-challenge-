# node-internship-challenge-

The algorithm operates by sequentially reading each line of text from the input file. For each line, it employs a comma (`,`) as a delimiter to split the content into individual values. Subsequently, the department and sales values, located at the two endpoints of each line, are extracted. To efficiently store and manage potential duplicate departments, a `Map` data structure is utilized. This map is key to aggregating sales data: if a department key already exists, the corresponding sales value is added to the existing total; otherwise, a new key-value pair is created.

Given the potential constraints on memory, the algorithm adopts a line-by-line reading approach to prevent loading the entire file into memory. Furthermore, to address potential limitations on memory during output generation, data is written to the output file in chunks, enhancing the program's ability to handle large outputs with greater efficiency.

##Time and Space complexity
In terms of computational complexity, the algorithm's time complexity is linear, O(n), where 'n' denotes the number of lines in the input file. As for space complexity, it is also linear, with the growth of the `salesData` map directly tied to the number of unique departments present in the input file. This approach ensures that the algorithm remains scalable and resource-efficient, even when dealing with large datasets.
