# git command

- `ctrl+L , clear` เคลียหน้าcommand
- `git --version` ดูเวอร์ชั่นgit
- `pwd` คือ คำสั่งแสดงชื่อไดเรกทรอรี่ปัจจุบัน ว่ากำลังทำงานอยู่ที่ไดเรกทรอรี่ใด

- `cd`กลับมาที่โฟลเดอร์home
- ` cd ..` ถอยหลัง
- ` cd /` ไปยัง root
- ` cd ../..` ลงไป2ระดับ
- ` ls` ดูว่าภายในตำแหน่งที่commandอยู่มีไฟล์อะไรบ้าง
- ` ls -a` ดูไฟล์ทุกตัว
- ` ls -L` แสดงไฟล์เป็นแบบยาว
- ` ls -al |`
- ` la -al | less` ดูแบบยาวกดลูกศรขึ้นลงไว้ดูไฟล์ได้
- ` ls -al | more`
- `q` กดออกจากคำสั่ง
- ` mkdir ????` คำสั่งสร้างโฟลเดอร์ตามด้ายชื่อโฟลเดอร์(????แทนที่ด้วยชื่อ) ณ จุดที่commandอยู่ เช่น desktop
- ` dir` ดูไฟล์ในterminal

- ` git init` สร้างไฟล์.git
- ` git config --global user.name "Sorawit_Kwanmuk"`
- ` git config --global user.email "sorawit_kwanmuk@outlook.com"`
- ` git config -l` เช็คข้อมูล
- ` git remote set-url origin https://github.com/Sorawit-Kwanmuk/Homework_CodeCamp9.git`
- ` git push -u origin main`
- ` git push --set-upstream https://github.com/Sorawit-Kwanmuk/Homework_CodeCamp9.git main`
- ` git branch --move master main`
- ` git commit -m "add new"`
- ` git add . หรือ git add ชื่อไฟล์` เช่น git add index.html
- ` git clone https://github.com/Sorawit-Kwanmuk/Homework_CodeCamp9.git`
- ` rm -rf .git` คำสั่งในterminal ลบโฟลเดอร์.git
- ` git status` เช็ค
- ` git rm --cached index.html`
- ` git add .` แทร็คไฟล์ทั้งหมดที่อยู่ในโฟลเดอร์ภายใต้มัน
- ` git add index.html` แทร็คเฉพาะไฟล์
- ` git rm --cached <file>` ไม่แทร็คไฟล์ที่ใส่ชื่อลงไป แต่ไม่ได้ลบไฟล์ออก
- ` git commit -m "" =>""`ใช้ใส่ข้อความเพื่อบอกว่าการแทร็คนี้เราทำอะไรไปบ้าง
- ` master คือชื่อbrach คือมีสาขาเดียว`
- ` git restore --staged` ชื่อไฟล์
- ` git restore --staged .` คือrestore ไฟล์ทั้งหมด แล้วค่อย add ใหม่
- ` git log` ดูบันทึกการทำงาน
- ` git log --oneline` ดูในบรรทัดเดียว
  คำสั่งย้าย HEAD , หรือก็คือย้าย index
- ` git checkout 03b1106 รหัสด้านหลังดูได้จาก git log --oneline` สำหรับย้อนcodeไปยังเวอร์ชั่นอื่นๆที่commitไว้ เช่นมีการลบไฟล์ไป แต่ต้องการไฟล์นั้นกลับมา-
  ให้ใช้git log --oneline เพื่อดูเวอร์ชั่นcommitที่แล้วๆมา และใช้idของcommitที่ต้องการในการ git checkout ไป
- ` git checkout maste`r`คือการย้อนกลับheadไปยังcommitเดิม`
- `.gitignore ไฟ`ล์ที่ไม่ต้องส่งตลอดไป add . จะไม่รวมไฟล์ที่กำหนดไปด้วย ให้สร้างไฟล์ .gitignore ขึ้นมาแล้วใส่ชื่อไฟล์หรือชื่อโฟลเดอร์ที่ไม่ต้องการเข้าไป เช่น temp/ อันนี้คือไม่เอาโฟลเดอร์ที่ชื่อ temp หรือถ้าจะกำหนดเป็นทุกไฟล์ที่มีสกุลเป็น .tmp ให้ใส่ \*.tmp ทุกไฟล์ที่มีสกุลเป็น .tmp จะไม่ถูก git add . เก็บเข้าไป
- ` !!! .gitignore`ต้องอยู่ด้านนอกสุดของโปรเจ็คเรา
- ` !!! สร้าง git branch` ใหม่ เพื่อใช้ทำอะไรบางอย่างกับcode เพื่อไม่ให้กระทบกับ branch master

- ` git branch` ตามด้วยชื่อbranchใหม่ที่เราต้องการสร้าง
- ` !!! ย้ายbranch` ไปยังbranchใหม่ที่เราสร้าง
- ` git checkout` ตามด้วยชื่อ branck
  เช่นเราสร้างbranchใหม่ ชื่อ develop วิธีสร้างคือ git branch develop
  และย้ายHEAD จาก masster ไปยัง develop คือ git cheackout develop
  การย้ายbranch สามารถแก้code ได้โดยไม่กระทบกับmaster เพราะที่develop ทำไป masterยังไม่ถูก add .
  กด commit ที่ branch ใหน ไฟล์จะอยู่ที่branch นั้น เช่น เราเปลี่ยนbranch แล้วสร้างไฟล์ใหม่มา ไม่ว่าจะอยู่branchใหนก็จะยังเห็นไฟล์นั้น
  แต่ถ้าอีกbranch กด add. commit แล้ว branch จะไม่เห็นไฟล์นั้นแล้ว เพราะ อีกbranch ได้ commit ไปแล้ว
  เราสามารถลบไฟทั้งหมดตอน branch develop แต่ถ้าเปลี่ยนbranch กลับไปยังmaster ไฟล์ทั้งหมดก็ยังคงอยู่
- ` git add . => git commit -m "" =>`

---

- ` สร้าง branch แยกไปแล้ว สามารถ merge`
  โดยการดึง branch ที่สร้างใหม่เข้ามารวมกับmaster
  โดยการ git checkout master มาอยู่ที่ branch master และกด git merge develop
  จะทำการดึงข้อมูลจาก brance delevop เข้ามารวมกับ branch master
- ` git log --graph` เราจะได้เห็นว่า ไฟล์ไหนมาจาก branch ไหน
- ` git branch -d` ตามด้วยชื่อ branch ที่ต้องการลบ
- ` ในกรณีที่ทั้ง2 branch แก้ไขไฟล์ที่ตำแหน่งเดียวกัน จะเกิดการ conflic กัน`
  เมื่อกด merge vscode จะขึ้นเตือนให้เลือกว่า บรรทัดที่ซ้ำกันนั้น
- ` !!!ดึง staged กลับมาได้`
- ` git reset --hard ตามด้วยเลขid commit` !!!!! แต่ว่าเมื่อย้อนกลับไปยังตำแหน่งที่กำหนด commitก่อนหน้าทั้งหมด
- ` git head ~ 2` ย้อนกลับไป2commit ก่อนหน้า ใช้ gitcheckout กลับมาที่เดิม
- ` git clone` copy clone html ตัวอย่าง git clone https://github.com/tratchapong/MyStopWatch.git
- `code .` ในcmd ตรงโฟลเดอร์ที่ต้องการเปิด เพื่อเปิดโปรเจ็คในvscode
