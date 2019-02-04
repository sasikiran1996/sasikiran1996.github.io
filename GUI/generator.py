import os
import math

fileList = []
for fileName in os.listdir("../stanford_truck_0.4"):
	fileList.append(fileName)

fileList.sort()
dim = int(math.sqrt(len(fileList)))
f = open("writer.txt",'w')
i = 0
j = 0
counter = 0
for fileName in fileList:
	f.write('<img id="img_' + str(i) + '_' + str(j) + '" src="../stanford_truck/' + fileList[counter] + '" style="display: none;">\n')
	counter += 1
	j += 1
	if (counter % dim == 0):
		i += 1
		j = 0

f.close()