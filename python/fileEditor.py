import os

def readFile(filePath, newFilePath):
    f = open(filePath)
    c = f.readlines()
    f.close()
    c.sort()
    fn = open(newFilePath, 'w')
    fn.writelines(c)
    fn.close()

filePath = r'\\eptserver\dropbox\Lori\CER\AdCefWebBrowserExit\laodedModules-Good.txt'
newFilePath = r'\\eptserver\dropbox\Lori\CER\AdCefWebBrowserExit\laodedModules-Good-order.txt'
readFile(filePath, newFilePath)

filePath = r'\\eptserver\dropbox\Lori\CER\AdCefWebBrowserExit\loadedModules-Bad.txt'
newFilePath = r'\\eptserver\dropbox\Lori\CER\AdCefWebBrowserExit\loadedModules-Bad-order.txt'
readFile(filePath, newFilePath)