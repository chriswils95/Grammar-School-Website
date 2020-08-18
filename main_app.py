from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow
from main import Ui_MainWindow
import sys
import os

class App(QMainWindow, Ui_MainWindow):
 def __init__(self):
  QMainWindow.__init__(self) 
  Ui_MainWindow.__init__(self)
  self.ui = Ui_MainWindow
  self.setupUi(self)
  self.show()




  if __name__ == "__main__":
    app = QtGui.QApplication(sys.argv)
    form = App()
    form.show()
    app.exec_()