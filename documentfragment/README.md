createDocumentFragment 测试

使用chrome 60测试，performance 面板里观察到

直接使用ul.appendChild(li)的方式，与ul.appendChild(fragment)方式相差不大，应该是chrome已经做了优化

直接使用ul.appendChild(li)

![使用ul.appendChild(li)](https://cloud.githubusercontent.com/assets/3389862/26442906/0a8fc2d8-4169-11e7-8a90-539484fd8932.png)


使用documentFragment

![使用documentFragment](https://cloud.githubusercontent.com/assets/3389862/26442932/202960cc-4169-11e7-9b4e-28f49a858862.png)

可以看到，直接append li的方式，并不会引起重新计算尺寸，相信chrome已经做过优化了


对直接使用ul.appendChild(li)的方式进行修改，改成异步,结果:

![异步插入](https://cloud.githubusercontent.com/assets/3389862/26443125/c3bc47ea-4169-11e7-8460-217568d78244.png)

可以看到，多了一些update layer tree
