"use strict";{
    angular.module('app')
    .controller('toDoController', function(){
        const $ctrl = this;
        $ctrl.list= [
                        {task: 'Walk the Dog', 
                        completed: true}, 
                        {task: 'Go to the store',
                        completed: false},
                        {task: 'Get gas',
                        completed: false}, 
                        {task: 'Wash the car',
                        completed: true}
                    ];
   
}
    )};