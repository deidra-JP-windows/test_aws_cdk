STAGE=dev

# ls　
.PHONY: ls
ls: # ls実行
	cdk ls -c environment=${STAGE}

# dev環境 ls　
.PHONY: ls_dev
ls_dev: # dev環境
	make ls STAGE=dev