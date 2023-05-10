<template>
    <div class="bigwrap">

        <!-- TATA -->
        <h1>{{ store.user.email }}</h1>
        <button class="button" @click="logout">LOGOUT</button>
        <!-- TATA -->

        <form @submit.prevent="addTodo">
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input class="input" type="text" placeholder="Type Something !" v-model='newTodoContent'>
                </div>
                <div class="control">
                    <button :disabled="!newTodoContent" class="button is-info">
                        Add
                    </button>
                </div>
            </div>
        </form>

        <br>

        <button class="button is-info" @click="reset">
            RESET
        </button>

        <br>
        <br>
        <br>

        <h1>GRAB</h1>
        <div>
            <table class="table is-fullwidth is-striped">
                <thead>
                    <tr>
                        <th class="text-left">
                            ลำดับ
                        </th>
                        <th class="text-left">
                            วันที่/สถานะ
                        </th>
                        <th class="text-left">
                            ข้อมูล
                        </th>
                        <th class="text-left">
                            ที่อยู่ร้านยา
                        </th>
                        <th class="text-left">
                            ที่อยู่ลูกค้า
                        </th>
                        <th class="text-center">
                            Control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in onValueGrabArray" v-bind:key="todo.id" v-bind:class="{ 'testClass01':todo.state == 1,'testClass02':todo.status == 'pending' || todo.status == 'timeout2','testClass03':todo.status == 'accept' }">
                        <td>
                            {{ index+1 }}
                        </td>
                        <td>
                            {{ todo.customCreated }}
                            <br>
                            {{ todo.customUpdated }}
                            <br>
                            สถานะ : {{ todo.status }}
                            <br>
                            {{ todo.showTimer }}
                        </td>
                        <td>
                            หมายเลขงาน : {{ todo.id }}
                            <br>
                            ลูกค้า : {{ todo.customerName }} ( {{ todo.customerId.substring(0,6) }} )
                            <br>
                            ร้านยา : {{ todo.pharmaId.substring(0,5) }}
                        </td>
                        <td>{{ todo.addressB.substring(0,30) }}...</td>
                        <td>{{ todo.addressA.substring(0,30) }}...</td>
                        <td>
                            <div class="column has-text-right">
                                <button class="button is-light">
                                    &check;
                                </button>
                                <button @click="deleteTodo(todo.id)" class="button is-danger">
                                    &cross;
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br>
        <br>

        <h1>JOB HISTORY</h1>

        <div>
            <table class="table is-fullwidth is-striped">
                <thead>
                    <tr>
                        <th class="text-left">
                            ลำดับ
                        </th>
                        <th class="text-left">
                            วันที่/สถานะ
                        </th>
                        <th class="text-left">
                            ข้อมูล
                        </th>
                        <th class="text-left">
                            ที่อยู่ร้านยา
                        </th>
                        <th class="text-left">
                            ที่อยู่ลูกค้า
                        </th>
                        <th class="text-center">
                            Control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in onValueJobHistoryArray" v-bind:key="todo.id" v-bind:class="{ 'testClass01':todo.state == 1,'testClass02':todo.status == 'pending' || todo.status == 'timeout2','testClass03':todo.status == 'accept' }">
                        <td>
                            {{ index+1 }}
                        </td>
                        <td>
                            {{ todo.customCreated }}
                            <br>
                            {{ todo.customUpdated }}
                            <br>
                            สถานะ : {{ todo.status }}
                            <br>
                            {{ todo.showTimer }}
                        </td>
                        <td>
                            หมายเลขงาน : {{ todo.id }}
                            <br>
                            ลูกค้า : {{ todo.customerName }} ( {{ todo.customerId.substring(0,6) }} )
                            <br>
                            ร้านยา : {{ todo.pharmaId.substring(0,5) }}
                        </td>
                        <td>{{ todo.addressB.substring(0,30) }}...</td>
                        <td>{{ todo.addressA.substring(0,30) }}...</td>
                        <td>
                            <div class="column has-text-right">
                                <button class="button is-light">
                                    &check;
                                </button>
                                <button @click="deleteTodo(todo.id)" class="button is-danger">
                                    &cross;
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br>
        <br>

        <h1>USERS</h1>
        <div>
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th class="text-left">
                            NO.
                        </th>
                        <th class="text-left">
                            CREATED
                        </th>
                        <th class="text-left">
                            DETAILS
                        </th>
                        <th class="text-left">
                            displayName
                        </th>
                        <th class="text-left">
                            KEY
                        </th>
                        <th class="text-center">
                            Control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in onValueUserArray" v-bind:key="todo.id" v-bind:class="{ 'testClass01':todo.state == 1,'testClass02':todo.state == 2,'testClass03':todo.state == 3 }">
                        <td>
                            {{ index+1 }}
                        </td>
                        <td>{{ todo.createdString }} <br> State : {{ todo.state }}</td>
                        <td>{{ todo.displayName }}</td>
                        <td>{{ todo.displayName }}</td>
                        <td>{{ todo.id }}</td>
                        <td>
                            <div class="column has-text-right">
                                <button class="button is-light">
                                    &check;
                                </button>
                                <button @click="deleteTodo(todo.id)" class="button is-danger">
                                    &cross;
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <br>
        <br>

        <h1>PHARMA</h1>
        <div>
            <table class="table is-fullwidth is-striped">
                <thead>
                    <tr>
                        <th class="text-left">
                            KEY
                        </th>
                        <th class="text-left">
                            displayName
                        </th>
                        <th class="text-left">
                            KEY
                        </th>
                        <th class="text-left">
                            displayName
                        </th>
                        <th class="text-left">
                            KEY
                        </th>
                        <th class="text-center">
                            Control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, index) in onValuePharmaArray" :key="todo.id" v-bind:class="{ 'testClass01':todo.state == 1,'testClass02':todo.state == '2','testClass03':todo.state == 3 }">

                        <td>
                            {{ index+1 }} 
                        </td>
                        <td>{{ todo.displayName }} <br> State : {{ todo.state }} <br> {{ todo.showTimer }} </td>
                        <td>
                            {{ todo.createdString }}
                            <br>
                            {{ todo.updatedString }}
                        </td>
                        <td>{{ todo.displayName }}</td>
                        <td>{{ todo.id }}</td>
                        <td>
                            <div class="column has-text-right">
                                <button class="button is-light">
                                    &check;
                                </button>
                                <button @click="deleteTodo(todo)" class="button is-danger">
                                    &cross;
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { ref as vRef, onMounted } from 'vue'
    import { getDatabase, set, child, get, ref, query, onValue, orderByChild, serverTimestamp, update, push, limitToLast } from 'firebase/database'
    import { database } from '@/firebase'

    /* TATA */
    import { store } from '../store'
    import { getAuth, signOut } from 'firebase/auth';
    /* TATA */

    const jobs = vRef([])
    const onValueGrabArray = vRef([])
    const onValueJobHistoryArray = vRef([])
    const onValueUserArray = vRef([])
    const onValuePharmaArray = vRef([])
    const newTodoContent = vRef('')
    const resetAllState = vRef('')

    /* TATA */
    const auth = getAuth();
    /* TATA */

    onMounted( async () => {   
        await onValueUsers()
        await onValuePharma()
        await queryJob()
        await checkTimeout()
        await onValueJobHistory()
        setInterval(checkTimeout, 100000)
        setInterval(queryJob,30000)
    })

    /* TATA */
    const logout = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ' : ' + errorMessage);
        });
    }
    /* TATA */

    const getServerTimestamp = async () => {
        await update(ref(database,'serverTimestamp'), {
            serverTimestamp : serverTimestamp()
        })
        const timestamp = await get(ref(database,'serverTimestamp'))
        return timestamp.val().serverTimestamp
    }

    const intervalGetJob = async () => {
        const snapJobs = await get(query(ref(database,'tJob')), orderByChild('created'))
        if (snapJobs.exists()) {
            let fbJob = []
            let count = 0
            let currentTimestamp = await getServerTimestamp()
            snapJobs.forEach(element => {
                count++
                const deltaTime = ((currentTimestamp - element.val().created)/1000).toFixed(0)
                const job = {
                    count : count,
                    id : element.key
                }
                fbJob.push(job)
            });
            fbJob.reverse()
            jobs.value = fbJob
        } else {

        }
    }

    const queryJob = async () => {
        const snapJob = await get(query(ref(database,'tJob')))
        const snapPharma = await get(query(ref(database,'tPharma')))

        if (snapPharma.exists() && snapJob.exists()) {

            let arrayPharmaJob = []
            let arrayJobPharma = []
            let range = 3

            // PHARMA -> JOB /////////////////////////////////////////
            snapPharma.forEach(elementPharma => {
                
                //big array
                let objPharmaJob = {}
                objPharmaJob.pharmaId = elementPharma.key
                objPharmaJob.state = elementPharma.val().state
                objPharmaJob.job = []
                
                snapJob.forEach(elementJob => {
                    let distance = getDistanceFromLatLonInKm(elementPharma.val().lat,elementPharma.val().lon,elementJob.val().lat,elementJob.val().lon)

                    if (distance <= range) {
                        let objJob = {}
                        objJob.jobId = elementJob.key
                        objJob.distance = distance
                        objPharmaJob.job.push(objJob)
                    }
                });
                arrayPharmaJob.push(objPharmaJob)
            });
             // END PHARMA -> JOB /////////////////////////////////////////


            // JOB -> PHARMA /////////////////////////////////////////
            snapJob.forEach(elementJob => {

                let objJobPharma = {}
                objJobPharma.jobId = elementJob.key
                objJobPharma.pharma = []

                snapPharma.forEach(elementPharma => {
                    let distance = getDistanceFromLatLonInKm(elementPharma.val().lat,elementPharma.val().lon,elementJob.val().lat,elementJob.val().lon)
                    if (distance < range) {
                        let objPharma = {}
                        objPharma.pharmaId = elementPharma.key
                        objPharma.distance = distance
                        objJobPharma.pharma.push(objPharma)
                    }
                });
                arrayJobPharma.push(objJobPharma)
            });
            // END JOB -> PHARMA /////////////////////////////////////////

            ////////// SET FINAL ARRAY FOR UPLOAD  ////////// SET FINAL ARRAY FOR UPLOAD
            ////////// SET FINAL ARRAY FOR UPLOAD  ////////// SET FINAL ARRAY FOR UPLOAD

            console.log(arrayPharmaJob)
            console.log(arrayJobPharma)
            
            let finalArrayPharma1to2 = []
            let finalArrayPharma2to1 = []
            let finalArrayPharma2to2 = []
            let finalArrayJobTooFar = []

            arrayPharmaJob.forEach(element => {
                if (element.state == 1 && element.job.length > 0) { // 1 to 2
                    finalArrayPharma1to2.push(element.pharmaId)
                } else if (element.state == 2 && element.job.length < 1) { // 2 to 1
                    finalArrayPharma2to1.push(element.pharmaId)
                } else if (element.state == 2 && element.job.length > 0) { // 2 to 2
                    finalArrayPharma2to2.push(element.pharmaId)
                }
            })

            arrayJobPharma.forEach(element => {
                if (element.pharma.length < 1) {
                    finalArrayJobTooFar.push(element.jobId)
                }
            })

            ///////// UPLOAD ZONE //////////
            ///////// UPLOAD ZONE ////////// 

            ////////// 1 to 2
            if (finalArrayPharma1to2.length > 0) {
                push(ref(database,'tPush'), {

                })
                finalArrayPharma1to2.forEach(element => {
                    update(ref(database,'tPharma/' + element), {
                        state : 2
                    })
                })
            }

            ////////// 2 to 1
            if (finalArrayPharma2to1.length > 0) {
                push(ref(database,'tPush'), {
                    
                })
                finalArrayPharma2to1.forEach(element => {
                    console.log(element)
                    update(ref(database,'tPharma/' + element), {
                        state : 1
                    })
                })
            }

            ////////// TOO FAR   
            if (finalArrayJobTooFar.length > 0) {
                finalArrayJobTooFar.forEach(element => {
                    //update tUser
                    //update tJobHistory
                });
                // push tPush
                // remove tJob
            }

        }
    }

    const onValueGrab = async () => {
        const dbRef = query(ref(database, 'tGrab'), orderByChild('created'))
        onValue(dbRef,(snapshot) => {
            update(ref(database,'serverTimestamp'), {
                serverTimestamp : serverTimestamp()
            }).then(() => {
                get(ref(database,'serverTimestamp')).then((snapTimestamp) => {
                    let fbSnapshot = []
                    let count = 0
                    snapshot.forEach(element => {
                        count++
                        const created = new Date(element.val().created)
                        const updated = new Date(element.val().updated)                        
                        const deltaTime = ((snapTimestamp.val().serverTimestamp - element.val().created)/1000).toFixed(0)
                        
                        const todo = {
                      
                        }
                        fbSnapshot.push(todo)
                    });
                    fbSnapshot.reverse()
                    onValueJobHistoryArray.value = fbSnapshot
                })
            })
        })
    }

    const onValueJobHistory = async () => {
        const tJobHistoryRef = query(ref(database, 'tJobHistory'), orderByChild('created'), limitToLast(3))
        onValue(tJobHistoryRef,(snapshot) => {
            update(ref(database,'serverTimestamp'), {
                serverTimestamp : serverTimestamp()
            }).then(() => {
                get(ref(database,'serverTimestamp')).then((snapTimestamp) => {
                    let fbSnapshot = []
                    let count = 0
                    snapshot.forEach(element => {
                        count++
                        const created = new Date(element.val().created)
                        const updated = new Date(element.val().updated)
                        const timeAccept = new Date(element.val().timeAccept)
                        let customTimeAccept = ''

                        if (element.val().timeAccept != '') {
                            customTimeAccept = `ACCEPTED : ${timeAccept.getDate()}/${timeAccept.getMonth()}/${timeAccept.getFullYear().toString().substring(2)} , ${timeAccept.getHours()}:${timeAccept.getMinutes()}`
                        } else {
                            customTimeAccept = 'ACCEPTED : '
                        }
                        
                        const deltaTime = ((snapTimestamp.val().serverTimestamp - element.val().created)/1000).toFixed(0)
                        
                        const customCreated = `CREATED : ${created.getDate()}/${created.getMonth()}/${created.getFullYear().toString().substring(2)} , ${created.getHours()}:${created.getMinutes()}`
                        const customUpdated = `UPDATED : ${updated.getDate()}/${updated.getMonth()}/${updated.getFullYear().toString().substring(2)} , ${updated.getHours()}:${updated.getMinutes()}`
                        

                        let timeToAccept = ((element.val().timeAccept - element.val().created)/1000/60).toFixed(0)
                        if (timeToAccept < 0) {
                            timeToAccept = ''
                        } else {
                            timeToAccept = timeToAccept + 'm'
                        }
                        
                        const todo = {
                            count : count,
                            id : element.key,
                            customerId : element.val().customerId,
                            customerName : element.val().customerName,
                            status : element.val().status,
                            created : element.val().created,
                            customCreated : customCreated,
                            customUpdated : customUpdated,
                            customTimeAccept : customTimeAccept,
                            serverTimestamp : snapTimestamp.val().serverTimestamp,
                            updated : element.val().updated,
                            updatedString : new Date(element.val().updated).toDateString(),
                            deltaTime : deltaTime,
                            addressA : element.val().addressA,
                            addressB : element.val().addressB,
                            pharmaId : element.val().pharmaId,
                            timeToAccept : timeToAccept
                        }
                        fbSnapshot.push(todo)
                    });
                    fbSnapshot.reverse()
                    onValueJobHistoryArray.value = fbSnapshot
                })
            })
        })
    }

    const onValueUsers = async () => {
        const tUsersRef = query(ref(database, 'tUsers'), orderByChild('created'))
        onValue(tUsersRef, (snapshot) => {
        
            update(ref(database,'serverTimestamp'), {
                serverTimestamp : serverTimestamp()
            }).then(() => {
                get(ref(database,'serverTimestamp')).then((snapTimestamp) => {
                    let fbSnapshot = []
                    let count = 0
                    snapshot.forEach(element => {
                        count++
                        const created = new Date(element.val().created)
                        const deltaTime = ((snapTimestamp.val().serverTimestamp - element.val().updated)/1000).toFixed(0)
                        const todo = {
                            count : count,
                            id : element.key,
                            displayName : element.val().displayName,
                            state : element.val().state,
                            created : element.val().created,
                            createdString : created.toDateString(),
                            serverTimestamp : snapTimestamp.val().serverTimestamp,
                            updated : element.val().updated,
                            updatedString : new Date(element.val().updated).toDateString(),
                            deltaTime : deltaTime
                        }
                        fbSnapshot.push(todo)
                    });
                    fbSnapshot.reverse()
                    onValueUserArray.value = fbSnapshot
                })
            })
        })
    }

    const onValuePharma = async () => {
        const dbRef = query(ref(database, 'tPharma'), orderByChild('created'))
        onValue(dbRef, (snapshot) => {
        
            update(ref(database,'serverTimestamp'), {
                serverTimestamp : serverTimestamp()
            }).then(() => {
                get(ref(database,'serverTimestamp')).then((snapTimestamp) => {
                    let fbSnapshot = []
                    let count = 0
                    snapshot.forEach(element => {
                        count++
                        const created = new Date(element.val().created)
                        const deltaTime = ((snapTimestamp.val().serverTimestamp - element.val().updated)/1000).toFixed(0)
                        const todo = {
                            count : count,
                            id : element.key,
                            displayName : element.val().displayName,
                            state : element.val().state,
                            created : element.val().created,
                            createdString : created.toDateString(),
                            serverTimestamp : snapTimestamp.val().serverTimestamp,
                            updated : element.val().updated,
                            updatedString : new Date(element.val().updated).toDateString(),
                            deltaTime : deltaTime
                        }
                        fbSnapshot.unshift(todo)
                    })
                    onValuePharmaArray.value = fbSnapshot
                })
            })
        });
    }

    const checkTimeout = async () => {
        const refJob = ref(database,'tJob')
        const snapshot = await get(refJob)
        if (snapshot.exists()) {
            let currentTimestamp = await getServerTimestamp()
            snapshot.forEach(elementJob => {    
                let deltaTime = ((currentTimestamp - elementJob.val().created)/1000).toFixed(1)
                let waitTime1 = 300
                let waitTime2 = 600

                if (elementJob.val().status == 'pending' && deltaTime > waitTime1) { // timeout1.5
                    try {
                        update(ref(database,'tUsers/' + elementJob.key), {
                            state : 1,
                            jobId : ""
                        })
                        update(ref(database,'tJobHistory/' + elementJob.val().jobId), {
                            status : 'timeout1.5'
                        })
                        push(ref(database,'tPush'), {
                            arrayPush : [elementJob.key],
                            status : 'pending',
                            created : serverTimestamp(),
                            type : 'alert',
                            message : 'ท่านไม่ได้ส่งชื่อกับหมายเลขโทรศัพท์ในเวลาที่กำหนด หากต้องการติดต่อร้านยากรุณาเรียกใหม่นะครับ ขอบคุณครับ'
                        })
                        remove(ref(database,'tJob/' + elementJob.key))
                    } catch (error) {
                        console.log(error)
                    }
                } else if (elementJob.val().status == 'active' && deltaTime > waitTime2) { // timeout2
                    try {    
                        update(ref(database,'tUsers/' + elementJob.key), {
                            state : 2,
                            jobId : ""
                        })
                        update(ref(database,'tJobHistory/' + elementJob.val().jobId), {
                            status : 'timeout2'
                        })
                        push(ref(database,'tPush'), {
                            arrayPush : [elementJob.key],
                            status : 'pending',
                            created : serverTimestamp(),
                            type : 'alert',
                            message : 'บริเวณใกล้เคียงไม่มีร้านยาตอบรับ ขออภัยในความไม่สะดวก กรุุณาลองเรียกใหม่นะครับ'
                        })
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        }
    }

    const countUp = () => {
        for (let i = 0; i < onValueJobHistoryArray.value.length; i++) {
            if (onValueJobHistoryArray.value[i].status == 'pending' || onValueJobHistoryArray.value[i].status == 'timeout2' || onValueJobHistoryArray.value[i].status == '') {
                var deltaTime = onValueJobHistoryArray.value[i].deltaTime++
                var d = Math.floor(deltaTime/1440)
                var m = Math.floor(deltaTime/60)
                var s = (deltaTime - (m*60))
                var show = 'UPDATED : ' + m + 'm ' + s + 's ago' 
                onValueJobHistoryArray.value[i].showTimer = show
            }
        }
    }

    const addTodo = () => {
        console.log('add todo')
        const newTodo = {
            id: 'ID 1',
            content: newTodoContent.value,
            dont: false
        }
        todos.value.unshift(newTodo)
        newTodoContent.value = ''
    }

    const reset = async () => {
        //user state to 1 , pharma state to 1 , remove all in tJob , tJobHistory status active -> "reset" , room active -> reset

        // firebase ref
        const tUsersRef = query(ref(database, 'tUsers'))
        const tPharmaRef = query(ref(database, 'tPharma'))
        const tJobHistoryRef = ref(database,'tJobHistory')
        const tRoomRef = ref(database,'tRoom')

        //await get
        const snapUsers = await get(tUsersRef)
        const snapPharma = await get(tPharmaRef)
        const snapJobHistory = await get(tJobHistoryRef)
        const snapRoom = await get(tRoomRef)

        snapUsers.forEach(element => {
            update(ref(database,'tUsers/' + element.key), {
                state : 1,
                partnerId : ''
            })
        })

        snapPharma.forEach(element => {
            update(ref(database,'tPharma/' + element.key), {
                state : 1
            })
        })

        snapJobHistory.forEach(element => {
            if (element.val().status == 'active') {
                update(ref(database,'tJobHistory/' + element.key), {
                    status : 'reset'
                })
            }
        })

        snapRoom.forEach(element => {
            if (element.val().info.status == "active") {
                update(ref(database, 'tRoom/' + element.key + '/info'), {
                    status : 'reset'
                })
            }
        })
        
        console.log('RESET')

    }

    const deleteTodo = id => {
        console.log('KEY : ' + id.displayName + id.id)
    }

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = (R * c).toFixed(2); // Distance in km
        return Number(d);
    }

    const deg2rad = (deg) => {
        return deg * (Math.PI/180)
    }

</script>

<style scoped>
@import 'bulma/css/bulma.min.css';

.testClass01 {
    color: black
}

.testClass02 {
    color: orangered;
}

.testClass03 {
    color: green;
}
</style>