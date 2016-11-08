import os
print('start create engine.pl ...')
file_list = []
output = open('../src/engine.pl','w')
for root, dirs, files in os.walk("../src"):
    for file in files:
        if file != 'engine.pl' and root=='../src':
            target = file.replace('.pl','')
            file_list.append(target)
            # print(root)
            print(target)
for item in file_list:
    pass
    output.write(':- load_files(%s, [encoding(utf8)]).\n'%(item))
print('finish create engine.pl ...')
