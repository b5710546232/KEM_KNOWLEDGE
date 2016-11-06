import os
print('start create engine.pl ...')
file_list = []
output = open('../src/engine.pl','w',"utf-8")
for root, dirs, files in os.walk("../src"):
    for file in files:
        if file != 'engine.pl':
            target = file.replace('.pl','')
            file_list.append(target)
            # print(target)

for item in file_list:
    output.write(':- use_module(%s,[]).\n'%(item))
print('finish create engine.pl ...')
