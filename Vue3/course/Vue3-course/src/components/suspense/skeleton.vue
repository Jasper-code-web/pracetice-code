<template>
    <div>
        <div class="sync">
            <div class="sync-content">
                <div class="img"></div>
                <div class="sync-pop">
                    <div></div>
                    <div>&nbsp;</div>
                </div>
            </div>
            <hr>
            <div class="content"></div>
            <div class="content"></div>
        </div>
    </div>
</template>
  
<style lang="less" scoped>
.sync {
    // background-color: #d4d9e1;
    padding: 30px;
}

.sync-content {
    display: flex;
    align-items: center;

    .img {
        width: 100px;
        height: 100px;
        background-color: #d4d9e1;
        border-radius: 50%;
        margin-right: 20px;
        // object-fit: cover;
    }
    .sync-pop{
        width: 20%;
        height: 20px;
        background-color: #d4d9e1;
    }
}
.content{
        width: 100%;
        height: 20px;
        background-color: #d4d9e1;
        margin: 20px 0;
    }
</style>